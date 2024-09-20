import express from 'express';
import { auth } from '../middleware/auth';
import { sendMessage, getMessages } from '../controllers/messageController';

const router = express.Router();

router.post('/send', auth, sendMessage);
router.get('/:userId', auth, getMessages);

export default router;