import TeamMember from './TeamMember';
import Grid from '../UI/Grid';
// generuoti team memberi is teamsArr
const teamsArr = [
  {
    name: 'Kaiara Spencer',
    occupation: 'PRODUCT MANAGER',
    img: '/img/person_5.jpg',
  },
  {
    name: 'Dave Simpson',
    occupation: 'PRODUCT MANAGER',
    img: '/img/person_6.jpg',
  },
  {
    name: 'Ben Thompson',
    occupation: 'PRODUCT MANAGER',
    img: '/img/person_7.jpg',
  },
  {
    name: 'Kyla Stewart',
    occupation: 'PRODUCT MANAGER',
    img: '/img/person_8.jpg',
  },
];
function TeamList() {
  return (
    <Grid>
      <TeamMember
        name={teamsArr[0].name}
        occupation={teamsArr[0].occupation}
        img={teamsArr[0].img}
      />
      <TeamMember
        name={teamsArr[1].name}
        occupation={teamsArr[1].occupation}
        img={teamsArr[1].img}
      />
      <TeamMember
        name={teamsArr[2].name}
        occupation={teamsArr[2].occupation}
        img={teamsArr[2].img}
      />
      <TeamMember
        name={teamsArr[3].name}
        occupation={teamsArr[3].occupation}
        img={teamsArr[3].img}
      />
    </Grid>
  );
}
export default TeamList;
