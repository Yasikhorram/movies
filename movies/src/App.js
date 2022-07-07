import { useEffect } from "react";

const App = () => {
  const isShown = true;
  let name = "";
  console.log("name before is", name);

  useEffect(() => {
    name = prompt("whats your name?");
    console.log("name inside is", name);
  }, []);

  console.log("name after is", name);

  return (
    <div className="App">
      {isShown ? <h1>Hello {name}</h1> : <h3>Hello movies</h3>}
    </div>
  );
};

export default App;
