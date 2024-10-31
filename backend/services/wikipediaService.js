const axios = require('axios');

const wikipediaAPI = axios.create({
    baseURL: 'https://en.wikipedia.org/w/api.php',
    params: {
        format: 'json',
        origin: '*',
    }
});

const searchArticles = async (query) => {
    const response = await wikipediaAPI.get('', {
        params: {
            action: 'query',
            list: 'search',
            srsearch: query,
        }
    });
    return response.data.query.search
};

// Function to get article content
const getArticleContent = async (title) => {
    const response = await wikipediaAPI.get('', {
        params: {
            action: 'query',
            prop: 'extracts',
            exintro: true,
            explaintext: true,
            titles: title,
        }
    });

    const page = response.data.query.pages;
    const pageId = Object.keys(page)[0];
    return page[pageId];
};

module.exports = {
    searchArticles,
    getArticleContent,
};