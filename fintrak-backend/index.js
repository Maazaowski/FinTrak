const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');

const app = express();

// Use the CORS middleware to allow requests from any origin
app.use(cors({
  origin: 'http://localhost:3001',  // Allow requests from this origin
}));

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/invoices', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.log('MongoDB connection error:', err);
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

// Create an HTTP server
const server = http.createServer(app);

// Set up WebSocket server on the HTTP server
const wss = new WebSocket.Server({ server, path: '/ws' });

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('Client connected via WebSocket');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Start the HTTP server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
