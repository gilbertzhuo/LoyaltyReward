import React, {useState, useEffect} from "react";
import {
  newContextComponents
} from "@drizzle/react-components";
import "./App.css";

const {ContractData} = newContextComponents;
export default function App ({drizzle, drizzleState}){
  const [list, setList]  = useState();
  const [data, setData] = useState();
  useEffect(()=> {
    const list_contract = drizzle.contracts.List;
    

  },[])
  const submit = () => {
      
  }
  return (
    <>
      <h1>LIST</h1>
      <ContractData drizzle={drizzle} drizzleState = {drizzleState} method="ListTotal" contract="List"/>
    </>
  )
}
