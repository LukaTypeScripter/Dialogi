import asyncHandler from 'express-async-handler'
import path from 'path'
import MainModel from '../../model/mainModels.js'
//@desc    admin Route
//route GET /api/admin/
//@access PRIVATE
const newTeammembersUpdate = asyncHandler(async (req, res) => {
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

  const content = section.teamMembers.find((teamMembers) =>
  teamMembers._id.equals(imageId)
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


 const { name, status, phone, email, img, education, workExperience, training, learningCourse } = req.body;

 teamMember.name = name;
 teamMember.status = status;
 teamMember.phone = phone;
 teamMember.email = email;
 teamMember.img = img;
 teamMember.education = education;
 teamMember.workExperience = workExperience;
 teamMember.training = training;
 teamMember.learningCourse = learningCourse;
  await mainDocument.save();

  res.status(200).json(mainDocument);
});


  const newTeammembersALL = asyncHandler(async (req, res) => {
    try {
      const teamMembers = await MainModel.find({}, 'sections').lean();

      const allTeammembers= teamMembers.reduce((images, doc) => {
        const sections = doc.sections || []; 
        for (const section of sections) {
          const teamMembers = section.teamMembers || []; 
          images = images.concat(teamMembers);
        }
        return images;
      }, []);
      
      res.status(200).json(allTeammembers);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  const newTeammembersUDelate = asyncHandler(async (req, res) => {
    const imageId = req.params._id;
    
    try {
      const mainDocument = await MainModel.findOne({ "sections.Teammembers._id": imageId });
  
      if (!mainDocument) {
        return res.status(404).json({ message: 'Document not found' });
      }
  
      const section = mainDocument.sections.find(section =>
        section.teamMembers.some(img => img._id.equals(imageId))
      );
  
      if (!section) {
        return res.status(404).json({ message: 'Section not found' });
      }
  
      section.teamMembers = section.teamMembers.filter(img => !img._id.equals(imageId));
      await mainDocument.save();
  
      res.json({ message: 'TeammembersImage deleted', mainDocument });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  const newTeammembersAdd = asyncHandler(async (req, res) => {
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
        console.log("imgFilePath:", imgFilePath);
        console.log("req.body:", req.body);
        const newImage = {
            img: path.relative('backend', imgFilePath),
            name: req.body.name,
            status: req.body.status,
            phone: req.body.phone,
            email: req.body.email,
            education: JSON.parse(req.body.education), 
            workExperience: JSON.parse(req.body.workExperience),
            trening: JSON.parse(req.body.trening),
            learningCourse: JSON.parse(req.body.learningCourse)
        };
        console.log(education);
        section.teamMembers.push(newImage);
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
    newTeammembersUpdate,
    newTeammembersALL,
    newTeammembersAdd,
    newTeammembersUDelate
  } 