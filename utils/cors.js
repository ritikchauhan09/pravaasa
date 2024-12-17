import Cors from 'cors';

// Initialize the CORS middleware with desired options
const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  origin: process.env.NEXT_PUBLIC_WEBSITE_URL || '*',  // Allowed origin (configure as needed)
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
});

// Helper function to run middleware in Next.js
export const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      resolve(result);
    });
  });
};

export default cors;
