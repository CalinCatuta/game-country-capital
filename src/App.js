import { getRandomHexColor } from "./util/RandomColor";
import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("");
  const [answer, setAnswer] = useState([]);
  const [goodAnswer, setGoodAnswer] = useState();

  const generateColors = (e) => {
    const chosedColor = getRandomHexColor();
    setColor(chosedColor);
    setAnswer(
      [chosedColor, getRandomHexColor(), getRandomHexColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    generateColors();
  }, []);

  const guessHan = (col) => {
    if (col === color) {
      setGoodAnswer(true);
      generateColors();
      setGoodAnswer();
    } else {
      setGoodAnswer(false);
    }
  };
  return (
    <div>
      <div className="box" style={{ background: `#${color}` }}></div>
      <div className="btns">
        {answer.map((col) => (
          <button onClick={() => guessHan(col)} key={col}>
            {col}
          </button>
        ))}
      </div>
      {goodAnswer === true && <h1>Good Answer</h1>}
      {goodAnswer === false && <h1>Wrong Answer</h1>}
    </div>
  );
}

export default App;
