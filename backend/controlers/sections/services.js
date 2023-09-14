import asyncHandler from 'express-async-handler'
import path from 'path'
import MainModel from '../../model/mainModels.js'
//@desc    admin Route
//route GET /api/admin/
//@access PRIVATE
const newserviceUpdate = asyncHandler(async (req, res) => {
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

  const content = section.services.find((services) =>
  services._id.equals(imageId)
  );
  if (!content) {
    return res.status(404).json({ message: 'Content not found' });
  }

  content.name = req.body.name;
  content.subtitle = req.body.subtitle;
  content.workDays = req.body.workDays;
  content.workHours = req.body.workHours;
    content.offdaysWork = req.body.offdaysWork;
content.offdaysHouers = req.body.offdaysHouers;
      content.attractText = req.body.attractText;
      content.mainText = req.body.mainText;
  await mainDocument.save();

  res.status(200).json(mainDocument);
});


  const newserviceALL = asyncHandler(async (req, res) => {
    try {
      const services = await MainModel.find({}, 'sections').lean();

      const allservice= services.reduce((images, doc) => {
        const sections = doc.sections || []; 
        for (const section of sections) {
          const services = section.services || []; 
          images = images.concat(services);
        }
        return images;
      }, []);
      
      res.status(200).json(allservice);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  const newserviceUDelate = asyncHandler(async (req, res) => {
    const imageId = req.params._id;
    
    try {
      const mainDocument = await MainModel.findOne({ "sections.services._id": imageId });
  
      if (!mainDocument) {
        return res.status(404).json({ message: 'Document not found' });
      }
  
      const section = mainDocument.sections.find(section =>
        section.services.some(img => img._id.equals(imageId))
      );
  
      if (!section) {
        return res.status(404).json({ message: 'Section not found' });
      }
  
      section.services = section.services.filter(img => !img._id.equals(imageId));
      await mainDocument.save();
  
      res.json({ message: 'serviceImage deleted', mainDocument });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  const newserviceAdd = asyncHandler(async (req, res) => {
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
  
   
  
      try {
  
        const newImage = {
          name: req.body.name,
        subtitle:req.body.subtitle,
          workDays:req.body.workDays,
          workHours:req.body.workHours,
offdaysWork:req.body.offdaysWork,
        offdaysHouers:req.body.offdaysHouers,
              attractText:req.body.attractText,
              mainText:req.body.mainText,
        };
  
        section.services.push(newImage);
        await mainDocument.save();
  
        res.status(201).json(mainDocument);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving the image' });
      }
  });
  export {
    newserviceUpdate,
    newserviceALL,
    newserviceAdd,
    newserviceUDelate
  } 