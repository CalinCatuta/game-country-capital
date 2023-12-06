import { useState } from "react";

const CountryAndCapitalGame = ({ data }) => {
  const countrys = Object.keys(data);
  const capitals = Object.values(data);
  const [options, setOptions] = useState(
    [...countrys, ...capitals]
      .sort(() => Math.random() - 0.5) // Rendomizing the array
      // this state will have an array with for each keys and value {state: "DEFAULT", value: "Germani"}
      .map((value) => ({
        value,
        state: "DEFAULT",
      }))
  );

  return (
    <div>
      {options.map((option) => (
        <button
          className={option.state === "SELECTED" ? "selected" : ""}
          onClick={() => {
            setOptions(
              options.map((opt) => {
                // on the option we click on we get that option back in state with the state changed from DEFAULT to Selected
                return opt === option
                  ? {
                      ...opt,
                      state: "SELECTED",
                    }
                  : opt;
              })
            );
          }}
        >
          {option.value}
        </button>
      ))}
    </div>
  );
};

function App() {
  return (
    <div>
      <CountryAndCapitalGame
        data={{ Germani: "Berlin", Romania: "Bucuresti" }}
      />
    </div>
  );
}

export default App;
