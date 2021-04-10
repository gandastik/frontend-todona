import React from "react";
import './App.css';
import TestApi from "./TestApi";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/index";
import contactPage from "./containers/contactPage";
import createPage from "./containers/createPage";
import donePage from  "./containers/donePage";
import editPage from "./containers/editPage";
import todoPage from "./containers/todoPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={todoPage} />
          <Route exact path="/done" component={donePage} />
          <Route exact path="/contact" component={contactPage} />
          <Route exact path="/create" component={createPage} />
          <Route exact path="/edit/:id" component={editPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
