// backend/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 6000;

// Define your backend routes here
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});`p`