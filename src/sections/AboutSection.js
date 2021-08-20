import heroSectionElipse from '../img/svg/hero-section-elipse.svg';
import whyElipseWhiteSmall from '../img/svg/why-elipse-white-small.svg';
import whyElipsePurple from '../img/svg/why-elipse-purple.svg';

const AboutSection = () => {
    return ( 
        <section className="about-section overflow-hidden">
            <img src={heroSectionElipse} alt="" className="hero-section-elipse elipse" />

            <img src={ whyElipseWhiteSmall } alt="" className="why-elipse-white-small elipse" />
            <img src={ whyElipsePurple } alt="" className="why-elipse-purple elipse" />

            <div className="text_container">

                <h2>About</h2>
        
                <p>I’m Thanos and I’m 38 years old. I identify as cis-male, gay, queer, highly sensitive, sexological bodyworker, web developer. <br />I'm a relationships geek who is passionate about sex, sexuality, pleasure and our bodies.<br />I'm kinky, submissive and I love being of service.<br />I also love coding, the challenge of problem-solving and I take delight in seeing people feel relief with the ease that technology brings.<br />I'm greek, and I lived most part of my adulthood in London. I currently live in Berlin.</p>

            </div>
        </section>
     );
}
 
export default AboutSection;