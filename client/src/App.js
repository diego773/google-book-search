import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/SavedBooks";
import Book from "./pages/Books";
import Nav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

    return (
      <Router>
      <div>
      <Nav />
      <Book />
         <Route exact path="/savedbooks" component={SavedBooks}>
         </Route>
        </div>
        </Router>
    );
}

export default App;
