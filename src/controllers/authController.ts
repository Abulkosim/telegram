import { Request, Response } from 'express';
import User from '../models/User';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    const token = user.generateToken();
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: 'Failed to register user' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    const token = user.generateToken();
    res.json({ user, token });
  } catch (error) {
    res.status(400).json({ error: 'Failed to login' });
  }
};