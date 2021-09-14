import React, {useState, useEffect} from "react";

import "./App.css";

export default function App ({drizzle, drizzleState}){
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [key, setKey] = useState("");
  useEffect(() => {
    const data = drizzle.contracts.List.methods.ViewList.cacheCall();
    setKey(data);
  },[])
  function getData() {
    const data = drizzleState.contracts.List.ViewList[key];
    setList(data.value)
  }
  function click() {
    if (task.length > 0) {
      setList([...list, task]);
      drizzle.contracts.List.methods.AddItem(task).send()
      setTask("");
    }
  }

  function deleteItem(name) {
    drizzle.contracts.List.methods.DeleteItem(name).send()
    setList(list.filter(item => {
      return item !== name}
    ))
  }

  return (
    <div className="flex-center">
      <div className="container">
        <div className="flex-split">
          <h1>Blockchain Task List</h1>
          <button onClick={()=>getData()}>Get Data</button>
        </div>
        <div className="flex-split">
          <input id="itemInput" placeholder="Type your task here..." onChange={(e)=>setTask(e.target.value)} value={task}/>
          <button style={{fontWeight:"bolder"}} onClick={()=>click()}>ADD</button>
        </div>
        <div>
        {list.length>0 ? (
          (list.map((item,index) => (
            <div key={index} className="flex-split item">
              {item}
              <div className="onHover" style={{background: "blanchedalmond", color:"red"}} onClick={()=>deleteItem(item)}>
                x
              </div>
            </div>
          )))
        ):""}
        </div>
       
      </div>
    </div>
  )
}
