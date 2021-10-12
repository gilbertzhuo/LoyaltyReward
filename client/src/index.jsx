import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Dizzle functions and contract artifacts
import LoyaltyReward from "./contracts/LoyaltyReward.json";
import { Drizzle } from "@drizzle/store";
import { DrizzleContext } from "@drizzle/react-plugin";

const options = {
  contracts: [LoyaltyReward],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
};

const drizzle = new Drizzle(options);

ReactDOM.render(  
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const {drizzle, drizzleState, initialized} = drizzleContext;
          if (!initialized) {
            return "Loading..."
          }
          return (
            <>
              <App drizzle={drizzle} drizzleState={drizzleState} />
            </>
            )
          }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
    , document.getElementById('root'));