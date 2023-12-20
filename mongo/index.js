const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4090;

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB URI)
mongoose.connect('mongodb+srv://varunshah:12345678_9@cluster0.sp71zec.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(bodyParser.json());

// Define the Payment schema
const paymentSchema = new mongoose.Schema({
  orderId: String,
  email: String,
  return: Boolean,
  products: Array,
});

// Define the Payment model
const Payment = mongoose.model('Payment', paymentSchema);

// API endpoint to create a payment record
app.post('/api/createPayment', async (req, res) => {
  try {
    const { orderId, email, products } = req.body;

    // Create a new Payment record
    const newPayment = new Payment({
      orderId,
      email,
      products,
    });

    // Save the payment record to MongoDB
    await newPayment.save();

    res.status(201).json({ message: 'Payment record created successfully' });
  } catch (error) {
    console.error('Error creating payment record:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/getPaymentsByEmail/:email', async (req, res) => {
    try {
      const email = req.params.email;
  
      // Find payment records based on the email
      const payments = await Payment.find({ email });
      console.log(payments)
      res.status(200).json(payments);
    } catch (error) {
      console.error('Error fetching payment records by email:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
