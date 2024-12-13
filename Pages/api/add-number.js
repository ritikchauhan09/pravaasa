// const mongoose = require('mongoose');
// const User = require('../../backend/models/Number');


// // Connect to MongoDB
// mongoose.connect('mongodb+srv://chauhanritik487:N58KbAmMq3F9oxBX@cluster0.h7cjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//     .then(() => console.log("Connected to MongoDB"))
//     .catch(err => console.error("MongoDB connection error:", err));


// const addNumberHandler = async (req, res) => {
 
//     const website_url = process.env.NEXT_PUBLIC_WEBSITE_URL;

//   res.setHeader('Access-Control-Allow-Origin', website_url );//|| '*'
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific HTTP methods
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers

//   if (req.method === 'OPTIONS') {
//     // Preflight request, just respond with headers
//     return res.status(200).end();
//   }

//   if (req.method === 'POST') {
//     const { number } = req.body;

//     // Validate input
//     if (!number) {
//       return res.status(400).json({ message: 'Number is required' });
//     }

//     try {
//       // Save number to the database
//       await User.create({ number });
//       return res.status(201).json({ message: 'Number saved successfully' });
//     } catch (error) {
//       console.error('Error saving number:', error);
//       return res.status(500).json({ message: 'Internal server error', error: error.message });
//     }
//   } else {
//     // Handle unsupported methods
//     res.setHeader('Allow', ['POST']);
//     res.status(405).json({ message: `Method ${req.method} Not Allowed` });
//   }
// };

// export default addNumberHandler;


// pages/api/add-number.js
import connectToDatabase from '../../utils/database'; // Make sure the import path is correct
import User from '../../backend/models/Number';

const addNumberHandler = async (req, res) => {
  const website_url = process.env.NEXT_PUBLIC_WEBSITE_URL;

  res.setHeader('Access-Control-Allow-Origin', website_url);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectToDatabase(); // Ensure the database is connected

    if (req.method === 'GET') {
      try {
        // Example of saving a number in the GET request for testing
        const result = await User.create({ number: '8219185857' });
        return res.status(201).json({ message: 'Number saved successfully' });
      } catch (error) {
        console.error('Error saving number:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
      }
    }

    if (req.method === 'POST') {
      const { number } = req.body;

      if (!number) {
        return res.status(400).json({ message: 'Number is required' });
      }

      const savedUser = await User.create({ number });
      return res.status(201).json({ message: 'Number saved successfully', data: savedUser });
    } else {
      res.setHeader('Allow', ['POST']);
      return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    console.error('Error in API handler:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

export default addNumberHandler;
