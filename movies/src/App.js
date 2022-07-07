const App = () => {
  let name = prompt("whats your name?");
  console.log("name before is", name);

  return (
    <div className="App">
      {name ? <h1>Hello {name}</h1> : <h3>Hello movies</h3>}
    </div>
  );
};

export default App;
