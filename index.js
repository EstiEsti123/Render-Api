const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// כאן נגדיר את המפתח - בפרסום נשתמש במשתנה סביבה
const RENDER_API_KEY = process.env.RENDER_API_KEY;

app.get('/apps', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer ${RENDER_API_KEY}`,
                'Accept': 'application/json'
            }
        });

        // החזרת רשימת האפליקציות כ-JSON
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch apps from Render' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});