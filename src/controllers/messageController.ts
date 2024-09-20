import { Request, Response } from 'express';
import { messageService } from '../services/messageService';

interface AuthenticatedRequest extends Request {
  user?: { _id: string };
}

export const sendMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { recipientId, content } = req.body;
    const senderId = (req as AuthenticatedRequest).user?._id;

    if (!senderId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const message = await messageService.createMessage(senderId.toString(), recipientId, content);
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};

export const getMessages = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId1 = (req as AuthenticatedRequest).user?._id;
    const userId2 = req.params.userId;

    if (!userId1) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const messages = await messageService.getMessagesBetweenUsers(userId1.toString(), userId2);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve messages' });
  }
};