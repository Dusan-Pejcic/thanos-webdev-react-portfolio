import Button from "../components/Button";

const WorkWithMe = () => {
    return ( 
       <section className="work-with-me">
           <div className="text_container">
        <h2>Work with me</h2>
  
        <h3>I am currently available directly, or through Queerit.</h3>
  
        <p>If you're interested, send me an email using the form below, stating the nature of your problem in as much detail as possible. If need be, I will follow up with an intake form and to arrange a meeting to discuss further.</p>

        <Button text={'contact me'}/>
         
      </div>
       </section> 
     );
}
 
export default WorkWithMe;