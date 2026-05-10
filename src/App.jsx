import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Programs from './pages/Programs';
import ProgramCommunityCare from './pages/ProgramCommunityCare';
import ProgramWorkforce from './pages/ProgramWorkforce';
import ProgramYouth from './pages/ProgramYouth';
import GetInvolved from './pages/GetInvolved';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Accessibility from './pages/Accessibility';
import SupabaseTodos from './pages/SupabaseTodos';
import ThankYou from './pages/ThankYou';

function App() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Accessible Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-charcoal font-bold py-2 px-4 rounded z-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary shadow-lg"
      >
        {t('nav.skip')}
      </a>

      <Header />
      <main className="flex-grow focus:outline-none" tabIndex="-1" id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/community-care" element={<ProgramCommunityCare />} />
          <Route path="/programs/workforce" element={<ProgramWorkforce />} />
          <Route path="/programs/youth" element={<ProgramYouth />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/todos-preview" element={<SupabaseTodos />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <Footer />

      {/* ARIA Live Region for dynamic alerts */}
      <div 
        aria-live="polite" 
        aria-atomic="true"
        aria-label="Submission status"
        className="sr-only" 
        id="aria-live-region"
      ></div>
    </div>
  );
}

export default App;
