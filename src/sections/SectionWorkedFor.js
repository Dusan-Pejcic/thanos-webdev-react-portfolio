import workedForELipseWhite from '../img/svg/worked-for-elipse-white.svg';
import workedForElipsePink from '../img/svg/worked-for-elipse-pink.svg';
import workedForElipsePurple from '../img/svg/worked-for-elipse-purple.svg';
import thanosPortfoiloQueerit from '../img/logos/thanos-portfolio-queerit.png';
import thanosPortfoiloLucas from '../img/logos/thanos-portfolio-lucas.png';
import thanosPortfoiloQueerdoc from '../img/logos/thanos-portfolio-queerdoc.png';
import thanosPortfoiloJamesBlack from '../img/logos/thanos-portfolio-james-black.png';
import thanosPortfoiloSquirel from '../img/logos/thanos-portfolio-squirel.png';
import thanosPortfoiloVenusEnvy from '../img/logos/thanos-portfolio-venus-envy.png';
import Blockquote from '../components/Blockquote';

const SectionWorkedFor = () => {
    return ( 
        <section className="worked-for">
            { workedForELipseWhite && <img src={ workedForELipseWhite } alt="" className="worked-for-elipse-white elipse" />}
            { workedForElipsePink && <img src={ workedForElipsePink } alt="" className="worked-for-elipse-pink elipse" />}
            { workedForElipsePurple && <img src={ workedForElipsePurple } alt="" className="worked-for-elipse-purple elipse" />}

            <div className="text_container">

                <h2>People I worked for:</h2>
            
                <div className="worked-for-logo-container">
                { thanosPortfoiloQueerit && <img className="client-logo" src={ thanosPortfoiloQueerit } alt="" />}
                { thanosPortfoiloLucas && <img className="client-logo" src={ thanosPortfoiloLucas } alt="" />}
                { thanosPortfoiloQueerdoc && <img className="client-logo" src={ thanosPortfoiloQueerdoc } alt="" />}
                { thanosPortfoiloJamesBlack && <img className="client-logo" src={ thanosPortfoiloJamesBlack } alt="" />}
                { thanosPortfoiloSquirel && <img className="client-logo" src={ thanosPortfoiloSquirel } alt="" />}
                { thanosPortfoiloVenusEnvy && <img className="client-logo" src={ thanosPortfoiloVenusEnvy } alt="" />}
                </div>

                <h3>What people that I have worked with have to say about me:</h3>

                <Blockquote text="I've worked with Thanos since 2010. I have always been absolutely delighted with the quality of the work he has produced for my website and the quickness with which he always responds to requests for updates. He’s also brilliant on extra-curricular technical matters and I can’t recommend his work too highly. " figcaption="—James Black, " cite="James Black Management" />
                
                <Blockquote text="Thanos has been integral to our progress and development as a company over the last decade. Beyond the bespoke web solutions created for us, his flexibility, innovation and openness has kept our customers happy and our processes stream-lined and user-friendly. His no nonsense, pragmatic approach combined with a sense of humour and humility make him a loyal invaluable asset!" figcaption="—Richard Howell, " cite="CEO, Secret Squirrels" />
                
            </div>
        </section>
     );
}
 
export default SectionWorkedFor;
