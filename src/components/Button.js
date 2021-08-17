const Button = (props) => {
    const text = props.text
    return ( 
        <div className="button">
            <button className="button-text">{text}</button>
        </div>
     );
}
 
export default Button;