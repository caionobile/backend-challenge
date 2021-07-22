import { Schema, model } from 'mongoose';

const videoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: {
    type: String,
    required: true,
    match:
      /(((ftp|http|https):\/\/)|(\/)|(..\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/i,
  },
});

export default model('Video', videoSchema);
