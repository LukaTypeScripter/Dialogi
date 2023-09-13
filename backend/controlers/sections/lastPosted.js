import asyncHandler from 'express-async-handler'
import path from 'path'
import MainModel from '../../model/mainModels.js'
//@desc    admin Route
//route GET /api/admin/
//@access PRIVATE
const newLastPostedUpdate = asyncHandler(async (req, res) => {
  const mainId = req.params.mainId;
  const sectionId = req.params.sectionId;
  const imageId = req.params.imageId;

  const mainDocument = await MainModel.findById(mainId);
  if (!mainDocument) {
    return res.status(404).json({ message: 'Main document not found' });
  }

  const section = mainDocument.sections.find((section) =>
    section._id.equals(sectionId)
  );
  if (!section) {
    return res.status(404).json({ message: 'Section not found' });
  }

  const content = section.lastPosted.find((lastPosted) =>
    lastPosted._id.equals(imageId)
  );
  if (!content) {
    return res.status(404).json({ message: 'Content not found' });
  }

  if (req.files && req.files.img) {
    const imgFile = req.files.img;
    const uploadFolder = 'backend/uploads';

    const imgFileName = `${Date.now()}_${imgFile.name}`;
    const imgFilePath = path.join(uploadFolder, imgFileName);

    try {
      await imgFile.mv(imgFilePath); 

      content.img = path.relative('backend', imgFilePath); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error saving the image' });
    }
  }

  content.title = req.body.title;
  content.subtitle = req.body.subtitle;
  await mainDocument.save();

  res.status(200).json(mainDocument);
});


  const newLastPostedALL = asyncHandler(async (req, res) => {
    try {
      const aboutUsImages = await MainModel.find({}, 'sections').lean();

      const allAboutUsImages = aboutUsImages.reduce((images, doc) => {
        const sections = doc.sections || []; 
        for (const section of sections) {
          const lastPosted = section.lastPosted || []; 
          images = images.concat(lastPosted);
        }
        return images;
      }, []);
      
      res.status(200).json(allAboutUsImages);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  const newLastPostedUDelate = asyncHandler(async (req, res) => {
    const imageId = req.params._id;
    
    try {
      const mainDocument = await MainModel.findOne({ "sections.lastPosted._id": imageId });
  
      if (!mainDocument) {
        return res.status(404).json({ message: 'Document not found' });
      }
  
      const section = mainDocument.sections.find(section =>
        section.lastPosted.some(img => img._id.equals(imageId))
      );
  
      if (!section) {
        return res.status(404).json({ message: 'Section not found' });
      }
  
      section.lastPosted = section.lastPosted.filter(img => !img._id.equals(imageId));
      await mainDocument.save();
  
      res.json({ message: 'AboutUsImage deleted', mainDocument });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  const newLastPostedAdd = asyncHandler(async (req, res) => {
    const mainId = req.params.mainId;
    const sectionId = req.params.sectionId;
  
    const mainDocument = await MainModel.findById(mainId);
    if (!mainDocument) {
      return res.status(404).json({ message: 'Main document not found' });
    }
  
    const section = mainDocument.sections.find((section) =>
      section._id.equals(sectionId)
    );
    if (!section) {
      return res.status(404).json({ message: 'Section not found' });
    }
  
    if (req.files && req.files.img) {
      const imgFile = req.files.img;
      const uploadFolder = 'backend/uploads';
  
      const imgFileName = `${Date.now()}_${imgFile.name}`;
      const imgFilePath = path.join(uploadFolder, imgFileName);
  
      try {
        await imgFile.mv(imgFilePath); 
  
        const newImage = {
          img: path.relative('backend', imgFilePath), 
          title: req.body.title,
          subtitle: req.body.subtitle 
        };
  
        section.lastPosted.push(newImage);
        await mainDocument.save();
  
        res.status(201).json(mainDocument);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving the image' });
      }
    } else {
      return res.status(400).json({ message: 'No file uploaded' });
    }
  });
  export {
    newLastPostedUpdate,
    newLastPostedALL,
    newLastPostedAdd,
    newLastPostedUDelate
  } 