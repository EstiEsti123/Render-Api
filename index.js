
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const RENDER_API_KEY = process.env.RENDER_API_KEY;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/apps', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer ${RENDER_API_KEY}`,
                'Accept': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch apps from Render' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
