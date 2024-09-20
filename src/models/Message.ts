import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IMessage extends Document {
  sender: IUser['_id'];
  recipient: IUser['_id'];
  content: string;
  timestamp: Date;
  read: boolean;
}

const messageSchema: Schema<IMessage> = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  recipient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  read: { type: Boolean, default: false }
})

export default mongoose.model<IMessage>('Message', messageSchema);