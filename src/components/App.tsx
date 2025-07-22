import { Route, Routes } from "react-router-dom";

import CreateSession from "../pages/CreateSession";
import Database from "../pages/Database";
import EditGame from "../pages/EditGame";
import EditLocation from "../pages/EditLocation";
import EditPlayer from "../pages/EditPlayer";
import EditSession from "../pages/EditSession";
import EditSessionScores from "../pages/EditSessionScores";
import Games from "../pages/Games";
import Sessions from "../pages/Sessions";
import ViewSession from "../pages/ViewSession";
import FullPageError from "./FullPageError";
import NavigationTray from "./navigation/NavigationTray";
import { useDBInit } from "../data/db";
import Loading from "./Loading";

const App = () => {
  // const ready = useDBInit();
  const ready = true;

  return ready ? (
    <div className="o-app-flex-container">
      <div className="o-app-flex-content">
        <Routes>
          <Route path="/" element={<Sessions></Sessions>} />
          <Route path="/games" element={<Games></Games>} />
          <Route path="/games/:id" element={<EditGame></EditGame>} />
          <Route path="/database" element={<Database></Database>} />
          <Route path="/players/:id" element={<EditPlayer></EditPlayer>} />
          <Route
            path="/locations/:id"
            element={<EditLocation></EditLocation>}
          />
          <Route
            path="/sessions/new"
            element={<CreateSession></CreateSession>}
          />
          <Route path="/sessions/:id" element={<ViewSession></ViewSession>} />
          <Route
            path="/sessions/:id/edit"
            element={<EditSession></EditSession>}
          />
          <Route
            path="/sessions/:id/scores"
            element={<EditSessionScores></EditSessionScores>}
          />
          <Route
            path="*"
            element={
              <FullPageError>
                <p>Page not found</p>
              </FullPageError>
            }
          />
        </Routes>
      </div>
      <NavigationTray></NavigationTray>
    </div>
  ) : (
    <Loading />
  );
};

export default App;
