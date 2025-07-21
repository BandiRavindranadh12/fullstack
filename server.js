require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

const API_KEY = process.env.API_KEY; // Store API Key in .env file

app.get('/ipl-search', async (req, res) => {
    const searchQuery = req.query.q;
    const apiUrl = `https://api.cricapi.com/v1/players?apikey=${API_KEY}&search=${searchQuery}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching data" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));