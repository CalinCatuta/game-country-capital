import { CountryAndCapitalGame } from "./components/CountryAndCapital";

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
