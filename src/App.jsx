import './App.css';

function SectionTitle(props) {
  // console.log('props ===', props);
  return <h2 className="sectionTitle">{props.title}</h2>;
}

function Icon(props) {
  // console.log('props ===', props);
  return <i className={`fa ${props.iconName}`} aria-hidden="true"></i>;
}

function Grid() {
  return (
    <div className="grid">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  );
}

function ServiceCard() {
  return (
    <div className="card">
      <Icon className="card__icon" iconName="fa-rocket" />
      <h3>title</h3>
      <p className="card__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
        suscipit?
      </p>
      <a href="#" className="card__link">
        Learn more
      </a>
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
