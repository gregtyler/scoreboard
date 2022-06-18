import { useDB } from "../data/db";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

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
      <Routes>
        <Route
          path="/"
          element={
            <div>
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
          }
        />
        <Route path="expenses" element={<span>expenses</span>} />
        <Route path="invoices" element={<span>invoices</span>} />
      </Routes>
      <Link to="/">Sessions</Link>
      <Link to="/games">Games</Link>
      <Link to="/database">Database</Link>
    </div>
  );
};

export default App;
