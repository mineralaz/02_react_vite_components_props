import './App.css';

function SectionTitle(props) {
  console.log('props ===', props);
  return <h2 className="sectionTitle">{props.title}</h2>;
}

function Icon(props) {
  return <i className={`fa ${props.iconName}`} aria-hidden="true"></i>;
}

function Grid() {
  return (
    <div className="grid">
      <h2>
        koretele <Icon iconName="fa-rocket" />
      </h2>
      <h2>
        koretele <Icon iconName="fa-desktop" />
      </h2>
      <h2>
        koretele <Icon iconName="fa-wrench" />
      </h2>
    </div>
  );
}

function App() {
  return (
    <div className="App container">
      <SectionTitle title="Musu paslaugos" size="large" />
      <Grid />
      {/* <SectionTitle title="About us" /> */}
    </div>
  );
}

export default App;
