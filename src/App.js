import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/contact" component={Home} />
        <Route exact path="/terms" component={Home} />
        <Route
          exact
          path="/about"
          component={() => <div>Im the about page route</div>}
        />
        <Route
          exact
          path="/contact"
          component={() => <div>Im the contact page route</div>}
        />
      </Switch>
    </Router>
  );
};

export default App;
