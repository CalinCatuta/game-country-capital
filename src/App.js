import { CountryAndCapitalGame } from "./components/CountryAndCapital";

function App() {
  return (
    <div>
      <CountryAndCapitalGame
        data={{
          Germani: "Berlin",
          Romania: "Bucuresti",
          Francia: "Paris",
          Italia: "Rome",
          España: "Madrid",
          Japón: "Tokio",
          Brasil: "Brasilia",
          Turkey: "Ankara",
        }}
      />
    </div>
  );
}

export default App;
