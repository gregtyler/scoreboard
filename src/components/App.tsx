import { Route, Routes } from "react-router-dom";
import NavigationTray from "./navigation/NavigationTray";
import Games from "../pages/Games";
import Sessions from "../pages/Sessions";
import Database from "../pages/Database";
import EditGame from "../pages/EditGame";
import FullPageError from "./FullPageError";
import EditPlayer from "../pages/EditPlayer";
import EditLocation from "../pages/EditLocation";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Sessions></Sessions>} />
        <Route path="/games" element={<Games></Games>} />
        <Route path="/games/:id" element={<EditGame></EditGame>} />
        <Route path="/database" element={<Database></Database>} />
        <Route path="/players/:id" element={<EditPlayer></EditPlayer>} />
        <Route path="/locations/:id" element={<EditLocation></EditLocation>} />
        <Route
          path="*"
          element={
            <FullPageError>
              <p>Page not found</p>
            </FullPageError>
          }
        />
      </Routes>
      <NavigationTray></NavigationTray>
    </div>
  );
};

export default App;
