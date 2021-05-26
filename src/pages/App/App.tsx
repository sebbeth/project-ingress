import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import CreateEvent from "../CreateEvent/CreateEvent";
import Account from "../Account/Account";
import Event from "../Event/Event";

const App: React.FC = () => {

  return (
    <Router>
      <div className="App">
        <div className={"nav"}>
          Top level nav
          <div>
            <Link to="/home">
              <button>Home</button>
            </Link>
            <Link to="/account">
              <button>Account</button>
            </Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/new">
            <CreateEvent />
          </Route>
          <Route path="/event/:eventId">
            <Event />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
