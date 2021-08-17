import whyElipseWhiteSmall from '../img/svg/why-elipse-white-small.svg';
import whyElipsePurple from '../img/svg/why-elipse-purple.svg';

const SectionWhy = () => {
    return ( 
        <section className="why">
            <img src={ whyElipseWhiteSmall } alt="" className="why-elipse-white-small elipse" />
            <img src={ whyElipsePurple } alt="" className="why-elipse-purple elipse" />

            <div className="text_container">

                <h2>Why for the fields of sexuality,
                gender and relationships?</h2>
        
                <h3>I care for relationships and my queer identity is important to me.</h3>
        
                <p>After working for many years on random commercial projects I decided to combine my values and passions with my love for coding.
                Working with me you will not only benefit from my technical expertise but also from my supportive attitude. Caring for what you offer means that I will also care better for providing you the technical assistance you need.</p>

            </div>
        </section>
     );
}
 
export default SectionWhy;