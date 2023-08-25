import express from 'express';
const router = express.Router();
import {newAboutUsImageALL,newAboutUsImageDelate,newAboutUsImageUpdate,newAboutUsImageAdd} from '../controlers/sections/aboutUsImage.js'
import {adminRoute} from '../controlers/adminControler.js'
import { isAdmin, protect } from '../middleware/authMiddleware.js';
import multer from 'multer';
const storage = multer.memoryStorage(); // Store the image in memory

const upload = multer({ storage });
//about-us section
// router.post("/aboutusimage",newAboutUsImage)
router.post('/admin',isAdmin, protect,adminRoute)
router.get("/aboutusimage",newAboutUsImageALL)
router.put("/aboutusimage/:mainId/:sectionId/:imageId",upload.single('img'),newAboutUsImageUpdate)
router.delete('/aboutusimage/:_id',newAboutUsImageDelate)
router.put('/aboutusimage/:mainId/:sectionId',upload.single('img'),newAboutUsImageAdd);
export default router; 