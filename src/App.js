import React from "react";
import Credit from "./components/Credit";
import creditlist from "./Creditlist";


function CreateCredit(info){
  return <Credit 
    key={info.key}
    name={info.name}
    img={info.img}
    company={info.company}
  />
}

function App() {
  return <div>
{creditlist.map(CreateCredit)}
  </div>
  
   
  
}

export default App;
