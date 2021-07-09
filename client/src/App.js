import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/SavedBooks";
import Books from "./pages/Books";
import Nav from "./components/Nav/index";

function App() {
  return (
    <Router>
    <div>
    <Nav />
      <Switch>
       <Route exact path="/" component={Books}>
      </Route>
       <Route exact path="/savedbooks" component={SavedBooks}>
       </Route>
      </Switch>
      </div>
      </Router>
  );
}

export default App;
