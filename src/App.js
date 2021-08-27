import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from "react";

import Nav from './Nav'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './Footer'

import SlideNav from './components/SlideNav';
import SlideNavBttn from './components/SlideNavBttn';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    console.log('toggle');
  };

  return (
    <Router>
      <div className="App">
        <SlideNav isOpen={menuOpen} toggler={toggleMenu} /> 
        <SlideNavBttn  isOpen={menuOpen} toggler={toggleMenu}/> 
        <Nav />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              {/* <Route exact path="/create">
                <Faq />
              </Route>
              <Route path="*">
                <NotFound />
              </Route> */}
            </Switch>
          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
