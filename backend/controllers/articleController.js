const wikipediaService = require('../services/wikipediaService');

const getArticleContent = async (req, res) => {
    try {
        const title = req.query.title;
        const content = await wikipediaService.getArticleContent(title);
        res.json(content);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching article content' });
    }
}

module.exports = { getArticleContent };