const express = require('express');
const path = require('path');
const app = express();

// Get port from environment or default to 3000 (for Docker)
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  console.log('Serving file from:', filePath);
  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
