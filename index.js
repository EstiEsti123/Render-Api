// const express = require('express');
// const axios = require('axios');
// const app = express();
// const port = process.env.PORT || 3000;

// // כאן נגדיר את המפתח - בפרסום נשתמש במשתנה סביבה
// const RENDER_API_KEY = process.env.RENDER_API_KEY;

// app.get('/apps', async (req, res) => {
//     try {
//         const response = await axios.get('https://api.render.com/v1/services', {
//             headers: {
//                 'Authorization': `Bearer ${RENDER_API_KEY}`,
//                 'Accept': 'application/json'
//             }
//         });

//         // החזרת רשימת האפליקציות כ-JSON
//         res.json(response.data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to fetch apps from Render' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
const express = require('express');
const axios = require('axios');
const path = require('path'); // מודול לניהול נתיבים
const app = express();
const port = process.env.PORT || 3000;

const RENDER_API_KEY = process.env.RENDER_API_KEY;

// 1. הגדרת תיקיית הקבצים הסטטיים
// ודאי שתיקיית ה-build של הריאקט נמצאת בתוך תיקיית הפרויקט הזה
app.use(express.static(path.join(__dirname, 'build')));

// נתיב ה-API הקיים שלך
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

// 2. פתרון ה-"Cannot GET /" 
// כל בקשה שלא הולכת ל-/apps תחזיר את אפליקציית הריאקט
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});