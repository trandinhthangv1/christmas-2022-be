import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const christmasSchema = new Schema({
  number: String,
  name: String,
  nameBank: String,
});

export default model('christmas', christmasSchema);
