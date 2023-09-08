import asyncHandler from 'express-async-handler';
import MainModel from '../../model/mainModels.js';
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

// Add a new our team member
const newOurTeamMember = asyncHandler(async (req, res) => {
    const mainId = req.params.mainId;
    const sectionId = req.params.sectionId;
    console.log('req.file:', req.file);
    const mainDocument = await MainModel.findById(mainId);
    
    if (!mainDocument) {
      return res.status(404).json({ message: 'Main document not found' });
    }
    
    const section = mainDocument.sections.find(section => section._id.equals(sectionId));
    
    if (!section) {
      return res.status(404).json({ message: 'Section not found' });
    }
    
    
    const newImage = {
        img: req.file.buffer.toString('base64'),
        name:req.body.name,
        status:req.body.status ,
        bgimg:req.file.buffer.toString('base64'),

      };
    section.ourTeam.push(newImage);
    await mainDocument.save();
    
    res.status(201).json(mainDocument);
  });

// Update an existing our team member
const updateOurTeamMember = async (req, res) => {
  try {
      const mainId = req.params.mainId;
      const sectionId = req.params.sectionId;
      const imageId = req.params.imageId;
      console.log('Update our team member route called');
      console.log('mainId:', req.params.mainId);
      console.log('sectionId:', req.params.sectionId);
      console.log('imageId:', req.params.imageId);
      // Find the main document
      const mainDocument = await MainModel.findById(mainId);

      if (!mainDocument) {
          return res.status(404).json({ message: 'Main document not found' });
      }

      // Find the section within the main document
      const section = mainDocument.sections.find(section => section._id.equals(sectionId));

      if (!section) {
          return res.status(404).json({ message: 'Section not found' });
      }

      // Find the specific member by imageId
      const member = section.ourTeam.find(member => member._id.equals(imageId));

      if (!member) {
          return res.status(404).json({ message: 'Member not found' });
      }

      // Update the member's properties if provided in the request body
      if (req.body.name) {
          member.name = req.body.name;
      }
      if (req.body.status) {
          member.status = req.body.status;
      }
      if (req.files) {
          if (req.files.img) {
              member.img = req.files.img[0].buffer.toString('base64');
          }
          if (req.files.teamMemberimg) {
              member.teamMemberimg = req.files.teamMemberimg[0].buffer.toString('base64');
          }
          if (req.files.bgimg) {
              member.bgimg = req.files.bgimg[0].buffer.toString('base64');
          }
      }

      await mainDocument.save();

      res.status(200).json(mainDocument);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
  }
};

// Delete an our team member
const deleteOurTeamMember = asyncHandler(async (req, res) => {
  const mainDocument = await MainModel.findById(req.params.id);
  if (!mainDocument) {
    res.status(404).json({ message: 'Main document not found' });
  } else {
    const memberId = req.params.memberId;
    mainDocument.sections[0].ourTeam = mainDocument.sections[0].ourTeam.filter((m) => m._id != memberId);
    await mainDocument.save();
    res.status(200).json(mainDocument.sections[0].ourTeam);
  }
});

export { getOurTeamMembers, newOurTeamMember, updateOurTeamMember, deleteOurTeamMember };
