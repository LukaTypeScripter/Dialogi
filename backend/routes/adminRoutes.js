import express from 'express';
const router = express.Router();
import {newAboutUsImageALL,newAboutUsImageDelate,newAboutUsImageUpdate,newAboutUsImageAdd} from '../controlers/sections/aboutUsImage.js'
import {adminRoute} from '../controlers/adminControler.js'
import { isAdmin, protect } from '../middleware/authMiddleware.js';
import { getOurTeamMembers,newOurTeamMember,updateOurTeamMember,deleteOurTeamMember } from '../controlers/sections/ourTeam.js';
import { newLastPostedUpdate } from '../controlers/sections/lastPosted.js';
import { upload } from '../middleware/upload.js';
//about-us section
// router.post("/aboutusimage",newAboutUsImage)
router.post('/admin',adminRoute)
router.get("/aboutusimage",newAboutUsImageALL)
router.put("/aboutusimage/:mainId/:sectionId/:imageId",newAboutUsImageUpdate)
router.delete('/aboutusimage/:_id',newAboutUsImageDelate)
router.put('/aboutusimage/:mainId/:sectionId',newAboutUsImageAdd);

//our
router.get('/ourteam', getOurTeamMembers);
router.post('/upload/:mainId/:sectionId',newOurTeamMember);
router.put(
    '/ourteam/:mainId/:sectionId/:imageId',
    updateOurTeamMember
  );
router.delete('/ourteam/:mainId/:sectionId/:memberId', deleteOurTeamMember);






router.put("/lasposted/:mainId/:sectionId/:imageId",upload.single('img'),newLastPostedUpdate)


export default router; 