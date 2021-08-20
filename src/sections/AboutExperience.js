import missionElipseWHite from "../img/svg/mission-elipse-white.svg";
import missionElipsePurple from "../img/svg/mission-elipse-purple.svg";
import missionElipsePink from "../img/svg/mission-elipse-pink.svg";

const AboutExperience = () => {
  return (
    <section className="about-experience">
      <img
        src={missionElipseWHite}
        alt=""
        className="mission-elipse-white elipse"
      />
      <img
        src={missionElipsePurple}
        alt=""
        className="mission-elipse-purple elipse"
      />
      <img
        src={missionElipsePink}
        alt=""
        className="mission-elipse-pink elipse"
      />

      <div className="text_container">
        <h2>Experience</h2>
        <p>
          After finishing my Bachelor in the Visual Arts and my Arts Computing
          MSC, I studied coding on my own and got my first job as a web designer
          and web developer for a small record label in west London. <br />
          Two years later I became a member of the digital agency Pretty, to
          which I stayed for for 7 years. I eventually became a full-time
          freelancer, working for small projects alongside my main work as an
          application developer for Secret Squirrels. <br />
          COVID-19 brought Secret Squirrels to a halt and me out of work. After
          some time of reflection and recollection, I decided to turn my
          attention and services to the projects I love and connect to. I
          applied for Queerit, which I work for since a year now and I slowly
          formed my vision for the services I offer, here in this website.{" "}
          <br />
          Along my website professional work I have also completed a couple of
          introductory counselling courses, one at Minster Centre and one in
          Psychosynthesis in London. Last year, I also completed certification
          as a sexological bodyworker, a training that taught me a lot about how
          to best be of service and in ongoing consent with my clients.
        </p>
        <br />
      </div>
    </section>
  );
};

export default AboutExperience;
