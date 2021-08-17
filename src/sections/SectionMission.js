import missionElipseWHite from '../img/svg/mission-elipse-white.svg';
import missionElipsePurple from '../img/svg/mission-elipse-purple.svg';
import missionElipsePink from '../img/svg/mission-elipse-pink.svg';

const SectionMission = () => {
    return ( 
    <section className="mission">
      <img src={ missionElipseWHite } alt="" className="mission-elipse-white elipse" />
      <img src={ missionElipsePurple } alt="" className="mission-elipse-purple elipse" />
      <img src={ missionElipsePink } alt="" className="mission-elipse-pink elipse" />

      <div className="text_container">
        <h2>I bring ease to your mission
          with the use of Code,
          web and technology.
        </h2>

        <h3>Some of the reasons someone might contact me are:</h3>

        <ul className="mission-p mission-ul">
          <li><p className='first-p'>e-shop site setup.</p></li>
          <li><p>Full website development or redevelopment</p></li>
          <li><p>Automating manual, time-consuming. repeated tasks.</p></li>
          <li><p>Applying changes to improve your website's search visibility (SEO).</p></li>
          <li><p>Applying changes to make websites faster
            (site optimisation).</p></li>
          <li><p>Resolving plugin conflicts in popular frameworks,
            such as Wordpress.</p>
          </li>
          <li><p>Developing features that current commercial plugins
            don’t offer.</p>
          </li>
          <li><p>Resolving up any technical online issues (eg 'my emails stopped working!').</p></li>
          <li><p>Development of custom CRM solutions.</p></li>
          <li><p>Development of custom systems connecting functionality and synchronising different tools (with the use of their APIs).</p></li>
        </ul>
      </div>

      <div className="text_container">
        <div className="dark-mission">
          <p className="dark">I offer consultancy and coaching for people who want to build their own websites but don't have the knowledge or feel confident enough to do it all by themselves.</p>
        </div>
      </div>
    </section>
     );
}
 
export default SectionMission;