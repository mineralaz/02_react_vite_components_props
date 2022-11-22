function TeamMember(props) {
  // destrukturizacija
  const { img, name, occupation } = props;
  return (
    <div className="member">
      <img src={img} alt={name} />
      <h2 className="member__name">{name}</h2>
      <p className="member__occupation">{occupation}</p>
    </div>
  );
}

export default TeamMember;
