import Nav from './Nav'
import Home from './pages/Home'
import About from './About'
import Footer from './Footer'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
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
