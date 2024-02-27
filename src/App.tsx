import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import Legal from './pages/Legal';
import Blog from './pages/Blog';
import Article from './components/Article';
import { createArticleList } from './hooks/ArticleHandler';

function App() {

  type ArticleType = { metadata: any; content: string; imgBlob: any; id: string };

  const [articles, setArticles] = useState<{ [id: string]: ArticleType }>({});
  
  const fetchArticles = async () => {
    const articleList = await createArticleList();
    setArticles(articleList);
  };
  fetchArticles();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/blog/:id" element={<Article articles={articles} />} />
          <Route path="/blog" element={<Blog articles={articles}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App