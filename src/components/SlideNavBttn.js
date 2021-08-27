const SlideNavBttn = (props) => {
    return ( 
        <div className="menu-btn-container">
        <div
          className={props.isOpen ? "menu-btn open" : "menu-btn"}
          onClick={props.toggler}
        >
          <div className="menu-btn__burger"></div>
        </div>
      </div>
     );
}
 
export default SlideNavBttn;