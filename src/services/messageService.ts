import Message, { IMessage } from '../models/Message';

export class MessageService {
  async createMessage(senderId: string, recipientId: string, content: string): Promise<IMessage> {
    const message = new Message({
      sender: senderId,
      recipient: recipientId,
      content: content
    });
    return await message.save();
  }

  async getMessagesBetweenUsers(userId1: string, userId2: string): Promise<IMessage[]> {
    return await Message.find({
      $or: [
        { sender: userId1, recipient: userId2 },
        { sender: userId2, recipient: userId1 }
      ]
    }).sort({ timestamp: 1 });
  }
}

export const messageService = new MessageService();