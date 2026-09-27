import { useNavigate, useParams } from "react-router-dom";

import IconButton from "../components/button/IconButton";
import Card from "../components/card/Card";
import Chip from "../components/chip/Chip";
import DateTime from "../components/DateTime";
import FullPageError from "../components/FullPageError";
import Icon from "../components/Icon";
import AppBar from "../components/navigation/AppBar";
import ScoreTable from "../components/score-table/ScoreTable";
import { useSession } from "../data/db";
import Page from "./Page";
import ScoreTableActions from "../components/score-table/ScoreTableActions";

const ViewSession = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (typeof id !== "string") {
    return <FullPageError title="Game not found"></FullPageError>;
  }

  const [session] = useSession(id);

  if (!session) return null;

  const locked = session.locked;

  return (
    <div>
      <AppBar
        variant="small"
        title={session.title}
        backTo="/"
        actions={
          <IconButton icon="edit" to={`/sessions/${session._id}/edit`} />
        }
      ></AppBar>
      <Page>
        {locked ? (
          <Card image={session.game?.image} orientation="vertical">
            <div className="headline-small">{session.title}</div>
            <div className="c-card__body">
              <span style={{ opacity: 0.6 }}>Played on</span>{" "}
              <DateTime
                dateStyle="long"
                timeStyle="short"
                dateTime={session.start}
              ></DateTime>
            </div>
            <div>
              <Chip
                onClick={() => navigate(`/sessions/${session._id}/scores`)}
                icon="scoreboard"
              >
                Edit scores
              </Chip>
            </div>
          </Card>
        ) : (
          <ScoreTableActions session={session}></ScoreTableActions>
        )}

        <ScoreTable session={session} editable={!locked}></ScoreTable>
      </Page>
    </div>
  );
};

export default ViewSession;
