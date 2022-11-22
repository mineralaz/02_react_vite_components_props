import ContactItem from './ContactItem';
function ContactItemsGrid() {
  return (
    <div className="grid">
      <ContactItem
        icon="fa-map-marker"
        contactForm="203 Fake St. Mountain View, San Francisco, California, USA"
      />
      <ContactItem icon="fa-phone" contactForm="+1 232 3235 324" />
      <ContactItem icon="fa-envelope-o" contactForm="youremail@domain.com" />
    </div>
  );
}
export default ContactItemsGrid;
