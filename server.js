const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const port = 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});