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

function App() {
  return (
    <div>
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
    </div>
  )
}

export default App
