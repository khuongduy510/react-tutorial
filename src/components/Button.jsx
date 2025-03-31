import { useState } from "react";
export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count-Number</h1>
      <div id="display">{count}</div>
      <button id="up" onClick={()=>setCount(count+1)}>Up</button>
      <button id="down"onClick={()=>{if (count>0)setCount(count-1)}}>Down</button>
    </>
  );
}
