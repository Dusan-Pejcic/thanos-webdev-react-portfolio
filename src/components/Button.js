import { Link } from "react-router-dom";


const Button = (props) => {
    const text = props.text
    return ( 
        <div className="button">
           <Link to="/" className="button-text">{text}</Link> 
        </div>
     );
}
 
export default Button;