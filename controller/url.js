const shortid = require("shortid");
const URL = require("../model/url");

async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const generatedShortId = shortid.generate();

    try {
        await URL.create({
            shortId: generatedShortId,
            redirect: body.url,  
            visitHistory: []  
        });

        return res.json({ shortId: generatedShortId, redirect: body.url });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error creating short URL' });
    }
}

async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId});
    return res.json({ 
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
     })
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics,
};
