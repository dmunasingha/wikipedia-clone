import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Article({ title }) {
    const [content, setContent] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await axios.get(`http://localhost:5001/api/article?title=${title}`);
            setContent(response.data);
        };

        if (title) {
            fetchArticle();
        }
    }, [title]);

    if (!content) {
        return <div>Select an article to view</div>;
    }

    return (
        <div>
            <h1>{content.title}</h1>
            <p>{content.extract}</p>
        </div>
    );
}

export default Article;
