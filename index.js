const express = require('express');
const url = require('./routes/url');
const { connectToMongoDB } = require('./connection');
const URL = require('./model/url');
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => console.log("Mongodb connected"));

app.use(express.json());
app.use("/url", url);

// Redirect route
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    
    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now()
                    },
                },
            },
            { new: true } // Return the updated document
        );
        
        // Check if entry was found
        if (!entry) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        // Check if redirect URL exists
        if (!entry.redirect) {
            return res.status(400).json({ error: 'Redirect URL not available' });
        }

        // Redirect to the original URL
        res.redirect(entry.redirect);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
