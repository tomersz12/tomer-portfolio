import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Legal from './pages/Legal';

function App() {

  return (
    <>
      <Router basename="tomerszulsztein.com">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Router>
    </>
  )
}

export default App