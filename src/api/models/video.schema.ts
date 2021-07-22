import { Schema, model } from 'mongoose';

const videoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
});

export default model('Video', videoSchema);
