import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/index";
import ContactPage from "./containers/contactPage";
import CreatePage from "./containers/createPage";
import DonePage from "./containers/donePage";
import EditPage from "./containers/editPage";
import TodoPage from "./containers/todoPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={TodoPage} />
          <Route exact path="/done" component={DonePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/create" component={CreatePage} />
          <Route exact path="/edit/:id" component={EditPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
