import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HeroSection from './components/Hero/Hero'
import VideoSection from './components/VideoSection/Video'
import GiftSection from './components/Gift/Gift'
import EbookSection from './components/Ebook/Ebook'
import MentorshipSection from './components/Mentorship/Mentorship'
import Testimonials from './components/Testimonials/Testimonials'
import GiftTextsSection from './components/GiftTexts/GiftTexts'
import AboutSection from './components/About/About'
import SocialSection from './components/Social/Social'
import Footer from './components/Footer/Footer'
import OnlineTherapy from './components/pages/OnlineTherapy'

function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <GiftSection />
      <MentorshipSection />
      <EbookSection />
      <Testimonials />
      <GiftTextsSection />
      <AboutSection />
      <SocialSection />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/online-therapy" element={<OnlineTherapy />} />
      </Routes>
    </Router>
  )
}

export default App
