const CountryAndCapitalGame = ({ data }) => {
  const countrys = Object.keys(data);
  const capitals = Object.values(data);
  const options = [...countrys, ...capitals];

  return (
    <div>
      {options.map((option) => (
        <button>{option}</button>
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
