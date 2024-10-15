import { useState } from "react";
import Header from "./Header/Header";
import Person from "./Person/Person";

function App() {
  const [name, setName] = useState("");

  const randomName = () => {
    let names = ["mariko", "aniko", "niniko"];
    let randomIndex = Math.floor(Math.random() * names.length);
    console.log("click");
    setName(names[randomIndex]);
  };
  return (
    <>
      <Header />

      <h1 style={{ fontSize: "25px" }}>Hello : {name}</h1>
      <button onClick={randomName}>click me</button>
      <div>
        <Person name="Pikria" age="25" isStudent="true" />
        <Person name="Aniko" age="25" isStudent="true" />
        <Person name="Pikria" age="30" isStudent="false" />
      </div>
    </>
  );
}

export default App;
