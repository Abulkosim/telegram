import User, { IUser } from '../models/User';

export class UserService {
  async getUserById(id: string): Promise<IUser | null> {
    return User.findById(id);
  }

  async updateUser(id: string, updateData: Partial<IUser>): Promise<IUser | null> {
    return User.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteUser(id: string): Promise<IUser | null> {
    return User.findByIdAndDelete(id);
  }

  async getAllUsers(): Promise<IUser[]> {
    return User.find();
  }
}

export const userService = new UserService();
