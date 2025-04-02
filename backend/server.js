const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
const messages = [
  { id: 1, text: 'Hello from the backend!' },
  { id: 2, text: 'This is a sample message.' }
];

// Routes
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
  const newMessage = {
    id: messages.length + 1,
    text: req.body.text
  };
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 