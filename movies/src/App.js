import Person from "./Person";
const App = () => {
  let name = prompt("whats your name?");

  return (
    <div className="App">
      {name ? <h1>Hello {name}</h1> : <h3>Hello movies</h3>}
      <Person />
    </div>
  );
};

export default App;
