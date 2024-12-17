import mongoose from 'mongoose';

const MONGO_DB_URI = process.env.MONGODB_URI;

let cached = global._mongo;  // Global variable to cache database connection in Vercel serverless environment

if (!cached) {
  cached = global._mongo = { conn: null, promise: null };
}

const connectToDatabase = async () => {
  if (cached.conn) {
    // Reuse cached connection
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGO_DB_URI, options)
      .then((mongooseInstance) => {
        console.log('Connected to MongoDB');
        return mongooseInstance;
      })
      .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        throw new Error('MongoDB connection failed');
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectToDatabase;