import express from 'express';
const router = express.Router();
import {newAboutUsImageALL,newAboutUsImageDelate,newAboutUsImageUpdate,newAboutUsImageAdd} from '../controlers/sections/aboutUsImage.js'
import {adminRoute} from '../controlers/adminControler.js'
import { isAdmin, protect } from '../middleware/authMiddleware.js';
import multer from 'multer';
import { getOurTeamMembers,newOurTeamMember,updateOurTeamMember,deleteOurTeamMember } from '../controlers/sections/ourTeam.js';
import { newLastPostedUpdate } from '../controlers/sections/lastPosted.js';


const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
  });
//about-us section
// router.post("/aboutusimage",newAboutUsImage)
router.post('/admin',adminRoute)
router.get("/aboutusimage",newAboutUsImageALL)
router.put("/aboutusimage/:mainId/:sectionId/:imageId",upload.single('img'),newAboutUsImageUpdate)
router.delete('/aboutusimage/:_id',newAboutUsImageDelate)
router.put('/aboutusimage/:mainId/:sectionId',upload.single('img'),newAboutUsImageAdd);

// Get all our team members
router.get('/ourteam', getOurTeamMembers);

// Add a new our team member
router.put('/ourteam/:mainId/:sectionId',     upload.fields([
  { name: 'img', maxCount: 1 },
  { name: 'bgimg', maxCount: 1 },
]), newOurTeamMember);

// Update an existing our team member
router.put(
    '/ourteam/:mainId/:sectionId/:imageId',
    upload.fields([
      { name: 'img', maxCount: 1 },
      { name: 'teamMemberimg', maxCount: 1 },
      { name: 'bgimg', maxCount: 1 },
    ]),
    updateOurTeamMember
  );

// Delete an our team member
router.delete('/ourteam/:id', deleteOurTeamMember);






router.put("/lasposted/:mainId/:sectionId/:imageId",upload.single('img'),newLastPostedUpdate)

export default router; 