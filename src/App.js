import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {

  return (
    
    /* Router */
    
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
            {/* Switch = ensure only one component is shown up at one time */}
            <Switch>
              {/* Show component Home when visit (/),
                  exact = redirect only when it is excalty the same,
                  not just / */}
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/create">
                <Create/>
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails/>
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
