import React, { useState } from 'react';
import Search from './Search';
import Article from './Article';

function App() {
  const [articleTitle, setArticleTitle] = useState('');

  return (
    <div className="App">
      <h1>Wikipedia Viewer</h1>
      <Search setArticle={setArticleTitle} />
      <Article title={articleTitle} />
    </div>
  );
}

export default App;
