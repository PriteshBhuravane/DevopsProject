const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002;

// Serve static files (CSS, JS, images) from root (if needed)
app.use(express.static(__dirname)); // Serve files from the root

// Handle root route by sending index.html
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  console.log('Serving file from:', filePath); // Debugging
  res.sendFile(filePath);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});