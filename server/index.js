const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the Ionic app
app.use(express.static(path.join(__dirname, '../client/www')));

const gympalAPI = require('./routes/gympal');
gympalAPI(app);

// Route all other requests to the Ionic app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/www', 'index.html'));
});

// Load environment variables
const PORT = process.env.PORT || 8000;



var server = app.listen(PORT, () => {
    console.log(`servidor escuchando en ${server.address().port}`);
});

