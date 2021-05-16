import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    
    /* Router */
    
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
            <Switch>
              {/* Show component Home when visit / */}
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
