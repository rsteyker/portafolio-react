import './App.css'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Portfolio from './components/portfolio/Portfolio';

function App() {

  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  )
}

export default App
