import { useState } from "react";
import { Technology } from "./components/Technology";

const MOCK_INITIAL_VALUE = [
  {
    name: "Node.js",
    description: "The best option for Backend development",
  },
];

function App() {
  const [techs, setTechs] = useState(MOCK_INITIAL_VALUE);
  const [techName, setTechName] = useState("");
  const [techDescription, setTechDescription] = useState("");

  function handleRemoveTechnology(techName) {
    const newTechs = techs.filter((tech) => tech.name !== techName);
    setTechs(newTechs);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const nameAlreadyExists = techs.find((tech) => tech.name === techName);

    if (!nameAlreadyExists) {
      setTechs((oldState) => [
        ...oldState,
        {
          name: techName,
          description: techDescription,
        },
      ]);
    } else {
      alert("This name already exists in the List!");
    }
  }

  return (
    <div className="container">
      <div className="contentBox">
        <form>
          <strong>Chose your technologies:</strong>

          <label>Name:</label>
          <input onChange={(e) => setTechName(e.target.value)} />
          <label>Description</label>
          <input onChange={(e) => setTechDescription(e.target.value)} />
          <button onClick={handleSubmit}>Send</button>
        </form>
      </div>
      <div className="containerList">
        <h1>Technologies List:</h1>
        <Technology
          techs={techs}
          handleRemoveTechnology={handleRemoveTechnology}
        />
      </div>
    </div>
  );
}

export default App;
