require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Basic root route for health checks or simple pings
app.get('/', (req, res) => {
    res.status(200).send('Backend is running!');
});

// Endpoint to generate recipe
app.post('/api/generate-recipe', async (req, res) => {
    try {
        const { prompt } = req.body; // PROMPT
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ message: 'Gemini API key not configured on the server.' });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash-preview-05-20",
        });

        const result = await model.generateContent(prompt);
        res.json({ recipe: result.response.text() });

    } catch (error) {
        console.error('Error generating recipe on backend:', error);
        res.status(500).json({ message: 'Error generating recipe from external API' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
