import OurServices from './components/OurServices';
import OurTeamSection from './components/team/OurTeamSection';
import Hero from './components/hero/Hero';
import Section2Card from './components/2card-Section/Section2Card';
import ContactUs from './components/contactUs-section/ContactUs';
import './App.css';
import Button from './components/UI/Button';
import Grid from './components/UI/Grid';

function App() {
  return (
    <div className="App container">
      <Hero title="Info hero" subtitle="Info subtitle" color="blue" />
      <Button title="íncrement">Subscribe me</Button>
      <button>pavadinimas</button>
      <OurTeamSection />
      <OurServices />
      <Section2Card />
      <ContactUs />
    </div>
  );
}

export default App;
