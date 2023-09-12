import asyncHandler from 'express-async-handler';
import MainModel from '../../model/mainModels.js';
import path from 'path'
import fileUpload from 'express-fileupload';
import fs from 'fs/promises'
// Get all our team members
const getOurTeamMembers = asyncHandler(async (req, res) => {
    try {
        const ourTeam = await MainModel.find({}, 'sections').lean();
  
        const allourTeam = ourTeam.reduce((images, doc) => {
          const sections = doc.sections || []; 
          for (const section of sections) {
            const ourTeam = section.ourTeam || []; 
            images = images.concat(ourTeam);
          }
          return images;
        }, []);
        
        res.status(200).json(allourTeam);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
  });

  const newOurTeamMember = asyncHandler(async (req, res) => {
    const mainId = req.params.mainId;
    const sectionId = req.params.sectionId;
    const uploadFolder = 'backend/uploads';
  
    try {
      await fs.mkdir(uploadFolder, { recursive: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating upload folder' });
    }
  
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
  
    const imgFile = req.files && req.files.img; // Access uploaded file using req.files
    console.log('imgFile:', imgFile); // Log the imgFile object
  
    if (!imgFile) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
  
    const uniqueFilename = Date.now() + '_' + Math.random().toString(36).substring(2, 15);
    const imgFileName = uniqueFilename + '_' + imgFile.name;
  
    const imgFilePath = path.join(uploadFolder, imgFileName);
  
    try {
      // Save the uploaded file using mv() from express-fileupload
      imgFile.mv(imgFilePath, async (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Error saving the image' });
        }
  
        const newImage = {
          img: path.relative('backend', imgFilePath),
          name: req.body.name,
          status: req.body.status,
          bgimg: path.relative('backend', imgFilePath),
        };
  
        section.ourTeam.push(newImage);
        await mainDocument.save();
  
        res.status(201).json(mainDocument);
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error saving the image' });
    }
  });
// Update an existing our team member
const updateOurTeamMember = asyncHandler(async (req, res) => {
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
    const member = section.ourTeam.find((member) => member._id.equals(imageId));
  
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    if (req.body.name) {
      member.name = req.body.name;
    }
    if (req.body.status) {
      member.status = req.body.status;
    }
    if (req.files && req.files.img) {
      const imgFile = req.files.img;
      const uniqueFilename = Date.now() + '_' + Math.random().toString(36).substring(2, 15);
      const imgFileName = uniqueFilename + '_' + imgFile.name;
      const imgFilePath = path.join('backend/uploads', imgFileName);
  
      try {
        imgFile.mv(imgFilePath, async (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error saving the image' });
          }
  
          member.img = path.relative('backend', imgFilePath);
          await mainDocument.save();
  
          res.status(200).json(mainDocument);
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving the image' });
      }
    } else {
      await mainDocument.save();
      res.status(200).json(mainDocument);
    }
  });

// Delete an our team member
const deleteOurTeamMember = asyncHandler(async (req, res) => {
    const mainId = req.params.mainId;
    const sectionId = req.params.sectionId;
    const memberId = req.params.memberId;
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
    section.ourTeam = section.ourTeam.filter((member) => !member._id.equals(memberId));
    await mainDocument.save();
    res.status(200).json(section.ourTeam);
  });

export { getOurTeamMembers, newOurTeamMember, updateOurTeamMember, deleteOurTeamMember };
