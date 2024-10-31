const wikipediaService = require('../services/wikipediaService');

const searchArticles = async (req, res) => {
    try {
        const query = req.query.query;
        const results = await wikipediaService.searchArticles(query);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching search results' });
    }
}

module.exports = { searchArticles };