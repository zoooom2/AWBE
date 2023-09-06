import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  LandingPage,
  ArtAndCraft,
  DeliciousCuisine,
  LanguageAndDialect,
  ProblemsAndOpportunities,
  TradFest,
} from './pages';

import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/art-and-craft' element={<ArtAndCraft />} />
        <Route path='/delicious-cuisine' element={<DeliciousCuisine />} />
        <Route path='/language-and-dialect' element={<LanguageAndDialect />} />
        <Route
          path='/problems-and-opportunities'
          element={<ProblemsAndOpportunities />}
        />
        <Route path='/trad-fest' element={<TradFest />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
