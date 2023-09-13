import asyncHandler from 'express-async-handler';
import MainModel from '../../model/mainModels.js';




const deleteContent = asyncHandler(async (req, res) => {
    const mainId = req.params.mainId;
    const sectionId = req.params.sectionId;
    const contentId = req.params.contentId;
  
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
  
    const contentIndex = section.contents.findIndex((content) =>
      content._id.equals(contentId)
    );
    if (contentIndex === -1) {
      return res.status(404).json({ message: 'Content not found' });
    }
  
    // Remove the content at the specified index
    section.contents.splice(contentIndex, 1);
    await mainDocument.save();
  
    res.status(200).json(mainDocument);
  });



  const updateContent = asyncHandler(async (req, res) => {
    const mainId = req.params.mainId;
    const sectionId = req.params.sectionId;
    const contentId = req.params.contentId;
  
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
  
    const content = section.contents.find((content) =>
      content._id.equals(contentId)
    );
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
  
    // Update content properties based on the request body
    if (req.body.title) {
      content.title = req.body.title;
    }
    if (req.body.subtitle) {
      content.subtitle = req.body.subtitle;
    }
    if (req.body.color) {
      content.color = req.body.color;
    }
  
    await mainDocument.save();
  
    res.status(200).json(mainDocument);
  });


  const addContent = asyncHandler(async (req, res) => {
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
  
    const newContent = {
      title: req.body.title,
      subtitle: req.body.subtitle,
      color: req.body.color,
    };
  
    section.contents.push(newContent);
    await mainDocument.save();
  
    res.status(201).json(mainDocument);
  });
  const contentsAll = asyncHandler(async (req, res) => {
    try {
      const aboutUsImages = await MainModel.find({}, 'sections').lean();

      const allAboutUsImages = aboutUsImages.reduce((images, doc) => {
        const sections = doc.sections || []; 
        for (const section of sections) {
          const contents = section.contents || []; 
          images = images.concat(contents);
        }
        return images;
      }, []);
      
      res.status(200).json(allAboutUsImages);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  export {
    deleteContent,
    updateContent,
    addContent,
    contentsAll
  }