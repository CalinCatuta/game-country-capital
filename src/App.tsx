import { getRandomHexColor } from "./util/RandomColor";
import { useState, useEffect } from "react";

enum Result {
  Correct,
  Wrong,
}

function App() {
  const [color, setColor] = useState("");
  const [answer, setAnswer] = useState<string[]>([]);
  const [goodAnswer, setGoodAnswer] = useState<Result | undefined>(undefined);

  const generateColors = () => {
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

  const guessHan = (col: string) => {
    if (col === color) {
      setGoodAnswer(Result.Correct);
      generateColors();
      setGoodAnswer(undefined);
    } else {
      setGoodAnswer(Result.Wrong);
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
      {goodAnswer === Result.Correct && <h1>Good Answer</h1>}
      {goodAnswer === Result.Wrong && <h1>Wrong Answer</h1>}
    </div>
  );
}

export default App;
