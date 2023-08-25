import express from 'express';
import { authUser } from '../controlers/userControler.js';
const router = express.Router();
import { getAllData} from '../controlers/adminControler.js';
import { registerUser } from '../controlers/userControler.js';

router.post('/',registerUser)
router.post('/auth',authUser)
router.get('/data',getAllData)


export default router; 