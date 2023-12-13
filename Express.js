const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Replace <YOUR_DATABASE_URI> with your actual MongoDB connection URI
const uri = 'mongodb://localhost:27017/form';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to MongoDB database');
});

const Schema = mongoose.Schema;

const yourDataSchema = new Schema({
  name: String,
  email: String,
  phoneNumber: String,
  transactionId: String,
});

const YourData = mongoose.model('YourData', yourDataSchema);

app.post('/create', (req, res) => {
  const { name, email, phoneNumber, transactionId } = req.body;

  const newData = new YourData({
    name,
    email,
    phoneNumber,
    transactionId,
  });

  newData.save((err) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).send('Error saving data');
    } else {
      console.log('Data saved successfully');
      res.status(200).send('Data saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
