import './App.css';
import HomePage from './Pages/Home-Page/home-page';
import SimpleNavbar from './Navbars/Simple-NavBar/Simple-Navbar';
import About from './About/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <SimpleNavbar />
      <Router>
      <div>
{/*         <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
          <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>

     


    </div>
  );
}



function Users() {
  return <h2>Users</h2>;
}

export default App;
