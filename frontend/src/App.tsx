import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages';
import { Navbar, Footer } from './components';
import PageTemplate from './pages/PageTemplate';
import {
  artAndCraftPageConstant,
  deliciousCuisineConstant,
  languageAndDialectConst,
  problemsAndOpportunitiesConst,
  tradFestConst,
} from './utils/constants';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route
          path='/art-and-craft'
          element={
            <PageTemplate
              Title={artAndCraftPageConstant.Title}
              Paragraph={artAndCraftPageConstant.Paragraph}
              Img={artAndCraftPageConstant.Img}
            />
          }
        />
        <Route
          path='/delicious-cuisine'
          element={
            <PageTemplate
              Title={deliciousCuisineConstant.Title}
              Paragraph={deliciousCuisineConstant.Paragraph}
              Img={deliciousCuisineConstant.Img}
            />
          }
        />
        <Route
          path='/language-and-dialect'
          element={
            <PageTemplate
              Title={languageAndDialectConst.Title}
              Paragraph={languageAndDialectConst.Paragraph}
              Img={languageAndDialectConst.Img}
            />
          }
        />
        <Route
          path='/problems-and-opportunities'
          element={
            <PageTemplate
              Title={problemsAndOpportunitiesConst.Title}
              Paragraph={problemsAndOpportunitiesConst.Paragraph}
              Img={problemsAndOpportunitiesConst.Img}
            />
          }
        />
        <Route
          path='/trad-fest'
          element={
            <PageTemplate
              Title={tradFestConst.Title}
              Paragraph={tradFestConst.Paragraph}
              Img={tradFestConst.Img}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
