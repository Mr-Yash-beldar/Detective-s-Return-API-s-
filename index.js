// Define your route handler
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/topdetectives', (req, res) => {
    // Read the JSON file
    fs.readFile(path.join(__dirname, 'detective_api.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Sending JSON response
        res.json(jsonData);
    });
});

app.get('/books', (req, res) => {
    // Read the JSON file
    fs.readFile(path.join(__dirname, 'book_api.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Sending JSON response
        res.json(jsonData);
    });
});

app.get('/testimonials', (req, res) => {
    // Read the JSON file
    fs.readFile(path.join(__dirname, 'testimonials_api.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Sending JSON response
        res.json(jsonData);
    });
});




app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

