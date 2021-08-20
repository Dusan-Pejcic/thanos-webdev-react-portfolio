import missionElipseWHite from "../img/svg/mission-elipse-white.svg";
import missionElipsePurple from "../img/svg/mission-elipse-purple.svg";
import missionElipsePink from "../img/svg/mission-elipse-pink.svg";

import styles from './AboutTechnologiesAndQualifications.module.scss';
const AboutTechnologiesAndQualifications = () => {
  return (
    <section className="about-technologies">

<img src={ missionElipseWHite } alt="" className="mission-elipse-white elipse" />
      <img src={ missionElipsePurple } alt="" className="mission-elipse-purple elipse" />
      <img src={ missionElipsePink } alt="" className="mission-elipse-pink elipse" />

      <div className="text_container">
        <h2>Technologies I use.</h2>
        <ul className={styles.missionUl}>
          <li>
            <p className="first-p">Wordpress.</p>
          </li>
          <li>
            <p>Ruby on Rails</p>
          </li>
          <li>
            <p>Javascript.</p>
          </li>
          <li>
            <p>ReactJS.</p>
          </li>
          <li>
            <p>CSS.</p>
          </li>
          <li>
            <p>HTML.</p>
          </li>
        </ul>
      </div>

      <div className="text_container">
        <h2>Qualifications</h2>
        <ul className={styles.missionUl}>
          <li>
            <p className="first-p">MSC in Arts and Computing.</p>
          </li>
          <li>
            <p>Introduction to Counselling at Minster Center</p>
          </li>
          <li>
            <p>Sexological Bodywork at the Sea School of Embodiment.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutTechnologiesAndQualifications;
