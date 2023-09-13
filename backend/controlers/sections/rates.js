import asyncHandler from 'express-async-handler'
import path from 'path'
import MainModel from '../../model/mainModels.js'
//@desc    admin Route
//route GET /api/admin/
//@access PRIVATE
const newratesUpdate = asyncHandler(async (req, res) => {
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

  const content = section.rates.find((rates) =>
  rates._id.equals(imageId)
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

  content.name = req.body.name;
  await mainDocument.save();

  res.status(200).json(mainDocument);
});


  const newratesALL = asyncHandler(async (req, res) => {
    try {
      const rates = await MainModel.find({}, 'sections').lean();

      const allrates= rates.reduce((images, doc) => {
        const sections = doc.sections || []; 
        for (const section of sections) {
          const rates = section.rates || []; 
          images = images.concat(rates);
        }
        return images;
      }, []);
      
      res.status(200).json(allrates);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  const newratesUDelate = asyncHandler(async (req, res) => {
    const imageId = req.params._id;
    
    try {
      const mainDocument = await MainModel.findOne({ "sections.rates._id": imageId });
  
      if (!mainDocument) {
        return res.status(404).json({ message: 'Document not found' });
      }
  
      const section = mainDocument.sections.find(section =>
        section.rates.some(img => img._id.equals(imageId))
      );
  
      if (!section) {
        return res.status(404).json({ message: 'Section not found' });
      }
  
      section.rates = section.rates.filter(img => !img._id.equals(imageId));
      await mainDocument.save();
  
      res.json({ message: 'ratesImage deleted', mainDocument });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  const newratesAdd = asyncHandler(async (req, res) => {
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
          name: req.body.name,
        };
  
        section.rates.push(newImage);
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
    newratesUpdate,
    newratesALL,
    newratesAdd,
    newratesUDelate
  } 