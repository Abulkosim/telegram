import express from 'express';
import { getUserProfile, updateUserProfile, deleteUser, getAllUsers } from '../controllers/userController';
import { auth } from '../middleware/auth';

const router = express.Router();

router.get('/profile/:id', auth, getUserProfile);
router.put('/profile/:id', auth, updateUserProfile);
router.delete('/profile/:id', auth, deleteUser);
router.get('/all', auth, getAllUsers);

export default router;