import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home"
import Reward from "./pages/Reward";
import Wallet from "./pages/Wallet";
export default function App ({drizzle, drizzleState}){
  
  return (
  <Router>
        <Navbar/>
        <div>
          <Switch>
            <Route path="/reward">
              <Reward drizzle={drizzle} drizzleState={drizzleState}/>
            </Route>
            <Route path="/wallet">
              <Wallet drizzle={drizzle} drizzleState={drizzleState}/>
            </Route>
            <Route path="/">
              <Home drizzle={drizzle} drizzleState={drizzleState}/>
            </Route>
          </Switch>
        </div>
    </Router>
  )
}
