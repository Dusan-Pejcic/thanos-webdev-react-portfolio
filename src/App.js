import Nav from './Nav'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './Footer'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SlideNav from './components/SlideNav';

function App() {
  return (
    <Router>
      <div className="App">
        <SlideNav  /> 
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
