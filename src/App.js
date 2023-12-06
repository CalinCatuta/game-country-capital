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
  const [selected, setSelected] = useState();
  const gameEnd = options.length === 0;
  if (gameEnd) {
    return <h1>Congrats</h1>;
  }
  return (
    <div>
      {options.map((option) => (
        <button
          key={option.value}
          className={
            option.state === "SELECTED"
              ? "selected"
              : option.state === "WRONG"
              ? "wrong"
              : ""
          }
          onClick={() => {
            if (!selected) {
              setSelected(option);
              setOptions(
                options.map((opt) => {
                  // on the option we click on we get that option back in state with the state changed from DEFAULT to Selected
                  return opt === option
                    ? {
                        ...opt,
                        state: "SELECTED",
                      }
                    : { ...opt, state: "DEFAULT" };
                })
              );
            } else {
              if (
                selected.value === data[option.value] ||
                data[selected.value] === option.value
              ) {
                setOptions(
                  options.filter((opt) => {
                    return !(
                      opt.value === selected.value || opt.value === option.value
                    );
                  })
                );
              } else {
                setOptions(
                  options.map((opt) => {
                    return opt.value === selected.value ||
                      opt.value === option.value
                      ? { ...opt, state: "WRONG" }
                      : opt;
                  })
                );
              }
              setSelected(undefined);
            }
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
