import mongoose from 'mongoose';
import { config } from '../config';

const connection = { isConnected: false };
export const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log('using exisiting connection');
      return;
    }

    // Validate MongoDB URI
    if (!config.mongoURI) {
      throw new Error('MongoDB URI is not defined in config');
    }

    const db = await mongoose.connect(config.mongoURI);
    connection.isConnected = db.connections[0].readyState === 1;
    if (connection.isConnected) {
      console.log('✅ MongoDB connected successfully');
    }
  } catch (error) {
    console.log('failed to connect', error);
    connection.isConnected = false;
    // console.log(error)
  }
};
