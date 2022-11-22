import OurServices from './components/OurServices';
import OurTeamSection from './components/team/OurTeamSection';
import Hero from './components/hero/Hero';
import './App.css';

function App() {
  return (
    <div className="App container">
      <Hero title="Info hero" subtitle="Info subtitle" color="blue" />
      <OurTeamSection />
      <OurServices />
    </div>
  );
}

export default App;
