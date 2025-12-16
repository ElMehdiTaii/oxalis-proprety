import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import FooterApple from './components/FooterApple';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <a href="#main-content" className="skip-to-main">
          Aller au contenu principal
        </a>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main id="main-content" className="flex-grow" role="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/quote" element={<Quote />} />
            </Routes>
          </main>
          <FooterApple />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
