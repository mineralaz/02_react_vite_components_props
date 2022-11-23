import ServiceCard from './ServiceCard';

const cardsArr = [
  {
    id: 1,
    title: 'Business consulting',
    icon: 'fa-rocket',
    link: '/about.html',
  }, // 0
  { id: 2, title: 'Market Analysis', icon: 'fa-desktop', link: '/about.html' }, // 1
  { id: 3, title: 'User Monitoring', icon: 'fa-wrench', link: '/about.html' }, // 2
  { id: 4, title: 'Facebook', icon: 'fa-facebook', link: '/fb.html' }, // 3
];

function ServicesGrid() {
  return (
    <div className="grid">
      {cardsArr.map((cObj) => (
        <ServiceCard title={cObj.title} icon={cObj.icon} link={cObj.link} />
      ))}
    </div>
  );
}

export default ServicesGrid;
