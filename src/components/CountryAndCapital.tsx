import { useState } from "react";

type ButtonState = "DEFAULT" | "SELECTED" | "WRONG";
type Option = {
  value: string;
  state: ButtonState;
};

export const CountryAndCapitalGame = ({
  data,
}: {
  data: Record<string, string>;
}) => {
  // get only the country from object data
  const countrys = Object.keys(data);
  // get only the capitals from object data
  const capitals = Object.values(data);
  const [options, setOptions] = useState<Option[]>(
    [...countrys, ...capitals]
      .sort(() => Math.random() - 0.5) // Rendomizing the array
      // this state will have an array with for each keys and value {state: "DEFAULT", value: "Germani"}
      .map((value) => ({
        value,
        state: "DEFAULT",
      }))
  );
  //   This will get the object we click on to know what we clicked on.
  const [selected, setSelected] = useState<Option>();
  //   function
  //   check if it is the good pair of key and value
  const isPartOfPair = (opt: Option, selected: Option, option: Option) => {
    return opt.value === selected.value || opt.value === option.value;
  };
  const onClickHan = (option: Option) => {
    // Check if no option is currently selected
    if (!selected) {
      // If no option is selected, set the clicked option as selected
      setSelected(option);
      // Update the options array, marking the selected option as "SELECTED"
      setOptions(
        options.map((opt) => ({
          ...opt,
          state: opt === option ? "SELECTED" : "DEFAULT",
        }))
      );
    } else {
      // If an option is already selected, check if the clicked option forms a correct pair
      const capital = data[option.value];
      const selectedCapital = data[selected.value];

      if (selected.value === capital || selectedCapital === option.value) {
        // If the pair is correct, remove both options from the options array
        setOptions(
          options.filter((opt) => {
            return !isPartOfPair(opt, selected, option);
          })
        );
      } else {
        // If the pair is incorrect, mark both options as "WRONG" in the options array
        setOptions(
          options.map((opt) => {
            return isPartOfPair(opt, selected, option)
              ? { ...opt, state: "WRONG" }
              : opt;
          })
        );
      }
      // Reset the selected state to undefined for the next selection
      setSelected(undefined);
    }
  };

  //   change className function
  const onClassChangeHan = (option: Option) => {
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
    <div className="grid">
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
