import React, { useState } from 'react';
import axios from 'axios';

function Search({ setArticle }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const searchArticles = async (e) => {
        e.preventDefault();
        const response = await axios.get(`http://localhost:5001/api/search?query=${query}`);
        setResults(response.data);
    };

    return (
        <div>
            <form onSubmit={searchArticles}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Wikipedia"
                />
                <button type='submit'>Search</button>
            </form>
            <ul>
                {results.map((result) => (
                    <li key={result.pageid} onClick={() => setArticle(result.title)}>
                        {result.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Search;
