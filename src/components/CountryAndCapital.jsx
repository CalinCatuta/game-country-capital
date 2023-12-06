import { useState } from "react";

export const CountryAndCapitalGame = ({ data }) => {
  // get only the country from object data
  const countrys = Object.keys(data);
  // get only the capitals from object data
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
  //   this state get value when we click on a button
  const [selected, setSelected] = useState();
  //   function
  //   check if it is the good pair of key and value
  const isPartOfPair = (opt, selected, option) => {
    return opt.value === selected.value || opt.value === option.value;
  };
  const onClickHan = (option) => {
    if (!selected) {
      setSelected(option);
      setOptions(
        options.map((opt) =>
          // on the option we click on we get that option back in state with the state changed from DEFAULT to Selected
          ({ ...opt, state: opt === option ? "SELECTED" : "DEFAULT" })
        )
      );
    } else {
      if (
        selected.value === data[option.value] ||
        data[selected.value] === option.value
      ) {
        setOptions(
          options.filter((opt) => {
            return !isPartOfPair(opt, selected, option);
          })
        );
      } else {
        setOptions(
          options.map((opt) => {
            return isPartOfPair(opt, selected, option)
              ? { ...opt, state: "WRONG" }
              : opt;
          })
        );
      }
      setSelected(undefined);
    }
  };
  //   change className function
  const onClassChangeHan = (option) => {
    if (option.state === "SELECTED") {
      return "selected";
    } else if (option.state === "WRONG") {
      return "wrong";
    } else {
      return "";
    }
  };

  //   display Congrats when no button to click.
  const gameEnd = options.length === 0;
  if (gameEnd) {
    return <h1>Congrats</h1>;
  }
  return (
    <div>
      {options.map((option) => (
        <button
          key={option.value}
          className={onClassChangeHan(option)}
          onClick={() => onClickHan(option)}
        >
          {option.value}
        </button>
      ))}
    </div>
  );
};
