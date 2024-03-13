import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: string,
      required: true,
      unique: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
    },
    paswoord: {
      type: string,
      required: true,
    },
  },
  { timestaps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
