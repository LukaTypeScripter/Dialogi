import express from 'express';
import { authUser,adminRoute } from '../controlers/userControler.js';
const router = express.Router();

import { registerUser } from '../controlers/userControler.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/',registerUser)
router.post('/auth',authUser)
router.post('/admin',adminRoute)


export default router;