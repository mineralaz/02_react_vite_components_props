import ServiceCard from '../ServiceCard';
function Section2Card() {
  return (
    <div className="section2Cards">
      <ServiceCard
        title="Web & Mobile Specialties"
        icon="fa-cog"
        link="/about.html"
      />

      <ServiceCard
        title="Intuitive Thinkers"
        icon="fa-phone"
        link="/about.html"
      />

      <img src="img/section2cardsImg.jpg" alt="" />
    </div>
  );
}
export default Section2Card;
