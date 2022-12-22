import mongoose from 'mongoose';

async function connectMongo() {
  try {
    await mongoose.connect(
      'mongodb+srv://trandinhthang:S0lM7SjFdqrr8aPQ@cluster0.810w146.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log('Connect mongo success');
  } catch (error) {
    console.log(error);
  }
}

export default connectMongo;
