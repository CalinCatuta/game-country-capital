import { getRandomHexColor } from "./util/RandomColor";
import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState(getRandomHexColor);
  useEffect(() => {
    setColor(getRandomHexColor);
  }, []);
  return (
    <div>
      <div className="box" style={{ background: color }}></div>
      <div className="btns"></div>
    </div>
  );
}

export default App;
