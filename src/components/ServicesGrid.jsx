import ServiceCard from './ServiceCard';

const cardsArr = [
  { title: 'Business consulting', icon: 'fa-rocket', link: '/about.html' }, // 0
  { title: 'Market Analysis', icon: 'fa-desktop', link: '/about.html' }, // 1
  { title: 'User Monitoring', icon: 'fa-wrench', link: '/about.html' }, // 2
  { title: 'Facebook', icon: 'fa-facebook', link: '/fb.html' }, // 3
];

function ServicesGrid() {
  return (
    <div className="grid">
      <ServiceCard
        title={cardsArr[0].title}
        icon={cardsArr[0].icon}
        link={cardsArr[0].link}
      />
      <ServiceCard
        title={cardsArr[1].title}
        icon={cardsArr[1].icon}
        link={cardsArr[1].link}
      />
      <ServiceCard
        title={cardsArr[2].title}
        icon={cardsArr[2].icon}
        link={cardsArr[2].link}
      />
      <ServiceCard
        title={cardsArr[3].title}
        icon={cardsArr[3].icon}
        link={cardsArr[3].link}
      />
    </div>
  );
}

export default ServicesGrid;
