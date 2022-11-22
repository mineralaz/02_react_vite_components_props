import TeamMember from './TeamMember';

function TeamList() {
  return (
    <div className="grid">
      <TeamMember
        name="Kaiara Spencer"
        occupation="PRODUCT MANAGER"
        img="/img/person_5.jpg"
      />
      <TeamMember
        name="Dave Simpson"
        occupation="PRODUCT MANAGER"
        img="/img/person_6.jpg"
      />
      <TeamMember
        name="Ben Thompson"
        occupation="PRODUCT MANAGER"
        img="/img/person_7.jpg"
      />
      <TeamMember
        name="Kyla Stewart"
        occupation="PRODUCT MANAGER"
        img="/img/person_8.jpg"
      />
    </div>
  );
}
export default TeamList;
