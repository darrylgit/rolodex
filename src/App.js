import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: "Frankenstein", id: "23423" },
        { name: "Dracula", id: "4323" },
        { name: "Zombie", id: "5jf" }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
