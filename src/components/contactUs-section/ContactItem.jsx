import Icon from '../UI/Icon';
function ContactItem(props) {
  return (
    <div className="contactItem">
      <Icon iconName={props.icon} />
      <p>{props.contactForm}</p>
    </div>
  );
}
export default ContactItem;
