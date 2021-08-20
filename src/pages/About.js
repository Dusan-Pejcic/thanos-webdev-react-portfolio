import AboutSection from '../sections/AboutSection';
import AboutExperience from '../sections/AboutExperience';
import AboutTechnologiesAndQualifications from '../sections/AboutTechnologiesAndQualifications';
import style from './About.module.scss';

const About = () => {
    return ( 
        <div className="container">
            <AboutSection />
            <AboutExperience />
            <AboutTechnologiesAndQualifications />
        </div>
     );
}
 
export default About;