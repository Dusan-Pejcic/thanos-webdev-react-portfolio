import Button from "../components/Button"
import heroSectionElipse from '../img/svg/hero-section-elipse.svg';
import thanosIlustracija from '../img/thanos-Ilustracija.png';

const SectionHero = () => {
    return ( 
        <section className="hero overflow-hidden">
            <img src={heroSectionElipse} alt="" className="hero-section-elipse elipse" />

            <div className="hero-image-and-text-container">
                <div className="hero-image-container">
                    <img src={thanosIlustracija} alt="" className="thanos-illustration" />
                </div>

                <div className="text_container">
                    <p className='hero-text'>What can I do for you?</p>

                    <h1 className='hero-h1'>I’m Thanos, a website and application developer, a technical administrator consultant and a digital mentor in service of people who want to make a difference in the fields of sexuality, gender and relationships.</h1>

                    <Button text={'contact me'}/>
                </div>
            </div>
        </section>
     );
};
 
export default SectionHero;