import React from "react";
import WalletBalance from "../component/WalletBalance";
import RewardSection from "../component/RewardSection";

export default function Reward ({drizzle, drizzleState}){  
  return (
    <>
        <WalletBalance drizzle={drizzle} drizzleState={drizzleState}/>
        <RewardSection drizzle={drizzle} drizzleState={drizzleState}/>
    </>
  )
}
