// BEGIN: crs-localhost-client

const express = require('express');
const axios = require('axios');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// Enable CORS for localhost client
app.use(cors(

    {
        origin: 'http://localhost:3000'
        
    }
    ));


// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/topic/sde', async (req, res) => {
    try {
        const response = await axios.get('https://api.takeuforward.org/api/topic/sde');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// END: crs-localhost-client
