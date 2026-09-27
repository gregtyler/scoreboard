import { useParams } from "react-router-dom";

import FullPageError from "../components/FullPageError";
import AppBar from "../components/navigation/AppBar";
import ScoreTable from "../components/score-table/ScoreTable";
import { useSession } from "../data/db";
import Page from "./Page";
import ScoreTableActions from "../components/score-table/ScoreTableActions";

const EditSessionScores = () => {
  const { id } = useParams();
  if (typeof id !== "string") {
    return <FullPageError title="Game not found"></FullPageError>;
  }

  const [session] = useSession(id);

  if (!session) return null;

  return (
    <div>
      <AppBar
        variant="small"
        title={`${session.title}: Scores`}
        backTo={`/sessions/${session._id}`}
      ></AppBar>
      <Page>
        <ScoreTableActions session={session}></ScoreTableActions>

        <ScoreTable session={session} editable></ScoreTable>
      </Page>
    </div>
  );
};

export default EditSessionScores;
