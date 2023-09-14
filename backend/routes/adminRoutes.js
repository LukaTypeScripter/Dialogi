import express from 'express';
const router = express.Router();
import {newAboutUsImageALL,newAboutUsImageDelate,newAboutUsImageUpdate,newAboutUsImageAdd} from '../controlers/sections/aboutUsImage.js'
import {adminRoute} from '../controlers/adminControler.js'
import { isAdmin, protect } from '../middleware/authMiddleware.js';
import { getOurTeamMembers,newOurTeamMember,updateOurTeamMember,deleteOurTeamMember } from '../controlers/sections/ourTeam.js';
import { newLastPostedUpdate,newLastPostedAdd,newLastPostedALL,newLastPostedUDelate } from '../controlers/sections/lastPosted.js';
import {addContent,contentsAll,updateContent} from '../controlers/sections/contents.js'
import {newAboutUSALL,newAboutUSAdd,newAboutUSUDelate,newAboutUsUpdate} from '../controlers/sections/aboutus.js'
import {newratesALL,newratesAdd,newratesUDelate,newratesUpdate} from '../controlers/sections/rates.js'
import { newTeammembersALL,newTeammembersAdd,newTeammembersUDelate,newTeammembersUpdate } from '../controlers/sections/teammembers.js';
import { newserviceALL,newserviceAdd,newserviceUDelate,newserviceUpdate } from '../controlers/sections/services.js';
//about-us section
// router.post("/aboutusimage",newAboutUsImage)
router.post('/admin',adminRoute)
router.get("/aboutusimage",newAboutUsImageALL)
router.put("/aboutusimage/:mainId/:sectionId/:imageId",newAboutUsImageUpdate)
router.delete('/aboutusimage/:_id',newAboutUsImageDelate)
router.put('/aboutusimage/:mainId/:sectionId',newAboutUsImageAdd);

//ourTeam routes
router.get('/ourteam', getOurTeamMembers);
router.post('/upload/:mainId/:sectionId',newOurTeamMember);
router.put(
    '/ourteam/:mainId/:sectionId/:imageId',
    updateOurTeamMember
  );
router.delete('/ourteam/:mainId/:sectionId/:memberId', deleteOurTeamMember);

//last Posted routes
router.get("/lasposted",newLastPostedALL)
router.put("/lasposted/:mainId/:sectionId/:imageId",newLastPostedUpdate)
router.put("/lasposted/:mainId/:sectionId/",newLastPostedAdd)
router.delete('/lasposted/:_id',newLastPostedUDelate)


//contents routes
router.get("/contents",contentsAll)
router.put("/contents/:mainId/:sectionId/:contentId",updateContent)
router.put("/contents/:mainId/:sectionId/",addContent)
router.delete('/contents/:_id',newLastPostedUDelate)

//aboutus routes
router.get("/aboutus",newAboutUSALL)
router.put("/aboutus/:mainId/:sectionId/:imageId",newAboutUsUpdate)
router.put("/aboutus/:mainId/:sectionId/",newAboutUSAdd)
router.delete('/aboutus/:_id',newAboutUSUDelate)

//rates routes
router.get("/rates",newratesALL)
router.put("/rates/:mainId/:sectionId/:imageId",newratesUpdate)
router.put("/rates/:mainId/:sectionId/",newratesAdd)
router.delete('/rates/:_id',newratesUDelate)

//TODO: update seeder data to develop more easy !
//teamembers routes
router.get("/teamembers",newTeammembersALL)
router.put("/teamembers/:mainId/:sectionId/:imageId",newTeammembersUpdate)
router.put("/teamembers/:mainId/:sectionId/",newTeammembersAdd)
router.delete('/teamembers/:_id',newTeammembersUDelate)


//services routes
router.get("/services",newserviceALL)
router.put("/services/:mainId/:sectionId/:imageId",newserviceUpdate)
router.put("/services/:mainId/:sectionId/",newserviceAdd)
router.delete('/services/:_id',newserviceUDelate)
export default router; 