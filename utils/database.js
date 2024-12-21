import mongoose from 'mongoose';

//const MONGO_DB_URI = process.env.MONGODB_URI;
const MONGO_DB_URI = 'mongodb+srv://chauhanritik487:N58KbAmMq3F9oxBX@cluster0.h7cjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

let cached = global._mongo;  

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