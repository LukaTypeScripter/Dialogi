import express from 'express';
import { authUser } from '../controlers/userControler.js';
const router = express.Router();
import { getAllData,adminRoute,newAboutUsImage,newAboutUsImageALL,newAboutUsImageUpdate } from '../controlers/adminRoutes.js';
import { registerUser } from '../controlers/userControler.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';

router.post('/',registerUser)
router.post('/auth',authUser)
router.post('/admin', protect,adminRoute)
router.get('/data',getAllData)

//about-us section
router.post("/aboutusimage",newAboutUsImage)
router.get("/aboutusimage",newAboutUsImageALL)
router.put("/aboutusimage:id",newAboutUsImageUpdate)
router.put("/aboutusimage:id",newAboutUsImageUpdate)
export default router; 