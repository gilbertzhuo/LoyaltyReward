import React from "react";
import Market from "../component/Market";
import WalletBalance from "../component/WalletBalance";

export default function Wallet ({drizzle, drizzleState}){  
  return (
    <>
        <WalletBalance drizzle={drizzle} drizzleState={drizzleState}/>
        <Market drizzle={drizzle} drizzleState={drizzleState}/>
    </>
  )
}
