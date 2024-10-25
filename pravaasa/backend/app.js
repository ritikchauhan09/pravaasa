const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const numberRoutes = require('./routes/numbers'); // Adjusted to the correct path
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://pravaasaBliss:523562@cluster-pravaasa.jm6zk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-pravaasa', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Routes
app.use('/api/numbers', numberRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
