import { useParams } from "react-router-dom";
import FullPageError from "../components/FullPageError";
import AppBar from "../components/navigation/AppBar";
import { useDB } from "../data/db";
import Page from "./Page";

const ViewSession = () => {
  const { id } = useParams();
  const [sessions] = useDB("sessions");

  const session = sessions.find((x) => x._id === id);

  if (typeof session === "undefined") {
    return (
      <FullPageError backTo="/games">
        <p>Session not found</p>
      </FullPageError>
    );
  }

  return (
    <div>
      <AppBar variant="small" title={session.title} backTo="/"></AppBar>
      <Page>View session</Page>
    </div>
  );
};

export default ViewSession;
