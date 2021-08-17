const Blockquote = ({ text, figcaption, cite}) => {
    return ( 
        <div className="blockquote-container">
            <blockquote >
                <p>{ text }</p>
            </blockquote>
                    
            <figcaption>{ figcaption }<cite>{ cite }</cite></figcaption>
        </div>
     );
}
 
export default Blockquote;