import { useDB } from "../data/db";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useState } from "react";

const App = () => {
  const [games, setGames] = useDB("games");
  const [newGameName, setNewGameName] = useState("");

  const addGame = () => {
    setGames([...games, { _id: uuidv4(), name: newGameName }]);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewGameName(event.target?.value);
  };

  return (
    <div className="container">
      <h1>localStorage with React hooks</h1>
      <p>You have {games.length} games:</p>

      <ul>
        {games.map((game) => (
          <li key={game._id}>
            {game.name} <small>{game._id}</small>
          </li>
        ))}
      </ul>

      <input type="text" value={newGameName} onChange={handleChange} />
      <button onClick={addGame}>Add</button>
    </div>
  );
};

export default App;
