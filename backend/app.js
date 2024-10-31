const express = require('express');
const cors = require('cors');

const searchRoutes = require('./routes/searchRoutes');
const articleRoutes = require('./routes/articleRoutes');

const app = express();

app.use(cors());

// Test route to check if server is running
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/search', searchRoutes);
app.use('/api/article', articleRoutes);

module.exports = app;
