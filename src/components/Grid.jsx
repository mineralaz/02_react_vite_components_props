import ServiceCard from './ServiceCard';

function Grid() {
  return (
    <div className="grid">
      <ServiceCard
        title="Business consulting"
        icon="fa-rocket"
        link="/about.html"
      />
      <ServiceCard
        title="Market Analysis"
        icon="fa-desktop"
        link="/about.html"
      />
      <ServiceCard
        title="User Monitoring"
        icon="fa-wrench"
        link="/about.html"
      />
      <ServiceCard
        title="Business consulting"
        icon="fa-rocket"
        link="/about.html"
      />
      <ServiceCard
        title="Market Analysis"
        icon="fa-desktop"
        link="/about.html"
      />
      <ServiceCard
        title="User Monitoring"
        icon="fa-wrench"
        link="/about.html"
      />
    </div>
  );
}

export default Grid;
