import connectToDatabase from '../../utils/database';
import User from '../../backend/models/Number';
import cors, { runMiddleware } from '../../utils/cors';

const addNumberHandler = async (req, res) => {
  const website_url = process.env.NEXT_PUBLIC_WEBSITE_URL;

  try {
    
    console.log('Running CORS middleware...');
    await runMiddleware(req, res, cors);
    console.log('CORS middleware completed');

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
      console.log('OPTIONS request received, sending 200 response...');
      return res.status(200).end(); // Preflight response
    }

    // Connect to the database
    console.log('Connecting to database...');
    await connectToDatabase();
    console.log('Database connected');

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
