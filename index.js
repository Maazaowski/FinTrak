const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/invoices', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Invoice schema and model
const invoiceSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  amount: Number,
  status: { type: String, enum: ['paid', 'pending'], default: 'pending' },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

// Routes
app.get('/invoices', async (req, res) => {
  const invoices = await Invoice.find();
  res.json(invoices);
});

app.post('/invoices', async (req, res) => {
  const invoice = new Invoice(req.body);
  await invoice.save();
  res.json(invoice);
});

app.get('/dashboard', async (req, res) => {
  const paidInvoices = await Invoice.find({ status: 'paid' });
  const totalIncome = paidInvoices.reduce((sum, inv) => sum + inv.amount, 0);
  res.json({ totalIncome });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
