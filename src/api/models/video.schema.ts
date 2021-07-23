import { Schema, model } from 'mongoose';

const urlRegex =
  /(((ftp|http|https):\/\/)|(\/)|(..\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/i;

const videoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: {
    type: String,
    required: true,
    match: urlRegex,
  },
});

export default model('Video', videoSchema);
