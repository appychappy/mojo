import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style/app.scss";
import Sidebar from "./sidebar/sidebar";
import Header from "./header/header";
import NoRoute from "./no-route/no-route";
import Buildings from "./buildings/buildings";
import AnotherPage from "./another-page/another-page";

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <div className="container">
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Buildings />
              </Route>
              <Route exact path="/another-page">
                <AnotherPage />
              </Route>
              <Route path="*">
                <NoRoute />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
