import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Legal from './pages/Legal';
import Blog from './pages/Blog';
import Article from './components/Article';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/blog/:id" element={<Article />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  )
}

export default App