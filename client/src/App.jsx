import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";

export default function App ({drizzle, drizzleState}){
  
  return (
  <Router>
      <div>
        <Switch>
          <Route path="/redeem">
            <Home />
          </Route>
          <Route path="/wallet">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
