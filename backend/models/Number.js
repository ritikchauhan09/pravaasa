import mongoose from 'mongoose';

  const userSchema = new mongoose.Schema({
    number: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/ // Validates that the mobile number has 10 digits
    }
  });

export default mongoose.models.User || mongoose.model('Mobile', userSchema);