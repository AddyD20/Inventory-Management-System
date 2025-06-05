require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB connection error:', err));

// Example schema
const productSchema = new mongoose.Schema({
  product_name: String,
  quantity: Number,
  unit_price: String,
  purchase_date: String,
  expiry_date: String
});

// Dynamic model for collections
function getModel(collection) {
  return mongoose.model(collection, productSchema, collection);
}

// POST endpoint
app.post('/submit/', async (req, res) => {
  const { table, ...productData } = req.body;
  try {
    const Model = getModel(table);
    const doc = new Model(productData);
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));
