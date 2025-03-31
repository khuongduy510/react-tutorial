import { useState } from "react";

export default function Color() {
  const [color, setColor] = useState("#FFFF");

  function changeColor(event) {
    setColor(event.target.value);
  }
  return (
    <div>
      <h1>Color Picked App</h1>
      <div
        id="display"
        style={{ backgroundColor: color, width: 100, height: 100 }}
      >
        {color}
      </div>
      <label>Select a color: </label>
      <input type="color" name="" id="1" onChange={changeColor} />
    </div>
  );
}
