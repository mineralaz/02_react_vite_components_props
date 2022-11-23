import Icon from './UI/Icon';

function ServiceCard(props) {
  return (
    <div className="card">
      {props.data.map((card) => {})}
      <Icon iconName={props.icon} />
      <h3>{props.title}</h3>
      <p className="card__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
        suscipit?
      </p>
      <a href={props.link} className="card__link">
        Learn more
      </a>
    </div>
  );
}
export default ServiceCard;
