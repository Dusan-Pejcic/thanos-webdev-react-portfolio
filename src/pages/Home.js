import SectionHero from '../sections/SectionHero'
import SectionMission from '../sections/SectionMission'
import SectionWhy from '../sections/SectionWhy'
import SectionWorkedFor from '../sections/SectionWorkedFor'
import WorkWithMe from '../sections/WorkWIthMe'
const Home = () => {
    return ( 
        <div className="container">
            <SectionHero />
            <SectionMission />
            <SectionWhy />
            <SectionWorkedFor />
            <WorkWithMe />
        </div>
     );
}
 
export default Home;