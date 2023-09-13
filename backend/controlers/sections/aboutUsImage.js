import asyncHandler from 'express-async-handler'
import path from 'path'
import fs from 'fs/promises'
import MainModel from '../../model/mainModels.js'
//@desc    admin Route
//route GET /api/admin/
//@access PRIVATE
const newAboutUsImageUpdate = asyncHandler(async (req, res) => {
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

  const content = section.aboutUsimgs.find((aboutUsimg) =>
    aboutUsimg._id.equals(imageId)
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
      await imgFile.mv(imgFilePath); // Save the uploaded file to the server

      content.img = path.relative('backend', imgFilePath); // Update the relative path
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error saving the image' });
    }
  }

  content.content = req.body.content; // Update content
  await mainDocument.save();

  res.status(200).json(mainDocument);
});

  const newAboutUsImageALL = asyncHandler(async (req, res) => {
    try {
      const aboutUsImages = await MainModel.find({}, 'sections').lean();

      const allAboutUsImages = aboutUsImages.reduce((images, doc) => {
        const sections = doc.sections || []; 
        for (const section of sections) {
          const aboutUsImages = section.aboutUsimgs || []; 
          images = images.concat(aboutUsImages);
        }
        return images;
      }, []);
      
      res.status(200).json(allAboutUsImages);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  const newAboutUsImageDelate = asyncHandler(async (req, res) => {
    const imageId = req.params._id;
    
    try {

      const mainDocument = await MainModel.findOne({ "sections.aboutUsimgs._id": imageId });
  
      if (!mainDocument) {
        return res.status(404).json({ message: 'Document not found' });
      }
  
      const section = mainDocument.sections.find(section =>
        section.aboutUsimgs.some(img => img._id.equals(imageId))
      );
  
      if (!section) {
        return res.status(404).json({ message: 'Section not found' });
      }
  
      section.aboutUsimgs = section.aboutUsimgs.filter(img => !img._id.equals(imageId));
      await mainDocument.save();
  
      res.json({ message: 'AboutUsImage deleted', mainDocument });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  const newAboutUsImageAdd = asyncHandler(async (req, res) => {
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
        await imgFile.mv(imgFilePath); // Save the uploaded file to the server
  
        const newImage = {
          img: path.relative('backend', imgFilePath), // Store the relative path
          content: req.body.content, // Update content
        };
  
        section.aboutUsimgs.push(newImage);
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
    newAboutUsImageALL,
    newAboutUsImageUpdate,
    newAboutUsImageDelate,
    newAboutUsImageAdd
  }