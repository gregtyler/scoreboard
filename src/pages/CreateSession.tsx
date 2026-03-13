import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Button from "../components/button/Button";
import ButtonStrip from "../components/form/ButtonStrip";
import DateField from "../components/form/DateField";
import TextField from "../components/form/TextField";
import AppBar from "../components/navigation/AppBar";
import { db, useGames } from "../data/db";
import Page from "./Page";
import { Game, ScoreMode, translateScoreMode } from "../data/types";

export async function extractScoreMode(
  boardType: string,
): Promise<[ScoreMode, Game | undefined]> {
  let scoreMode = ScoreMode.Custom;
  let game = undefined;
  if (boardType.startsWith("custom:")) {
    const customType = boardType.split(":")[1];
    if (
      customType !== ScoreMode.Highest &&
      customType !== ScoreMode.Lowest &&
      customType !== ScoreMode.Custom
    ) {
      throw new Error("Invalid score mode");
    }

    scoreMode = customType;
  } else {
    game = await db.games.get(boardType);

    if (!game) {
      throw new Error("Game not found");
    }

    scoreMode = game.scoreMode;
  }

  return [scoreMode, game];
}

const CreateSession = () => {
  const games = useGames();

  const [start, setStart] = useState(new Date());
  const [boardType, setBoardType] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const _id = uuidv4();

    const [scoreMode, game] = await extractScoreMode(boardType);

    if (game) {
      game.template?.rounds?.forEach((round, index) => {
        db.rounds.add({
          sessionId: _id,
          index: index,
          label: round.label,
          colour: round.colour,
        });
      });
    }

    db.sessions.add({
      _id,
      title: title !== "" ? title : (game?.name ?? "New session"),
      start: start.toISOString(),
      gameId: game?._id,
      scoreMode,
      playerIds: [],
    });

    navigate(`/sessions/${_id}/scores`);
  };

  return (
    <div>
      <AppBar variant="small" title="New session" backTo="/"></AppBar>
      <Page>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          ></TextField>

          <TextField
            required
            label="Game"
            value={boardType}
            options={[
              [
                `custom:${ScoreMode.Highest}`,
                translateScoreMode(ScoreMode.Highest),
              ],
              [
                `custom:${ScoreMode.Lowest}`,
                translateScoreMode(ScoreMode.Lowest),
              ],
              [
                `custom:${ScoreMode.Custom}`,
                translateScoreMode(ScoreMode.Custom),
              ],
              ["", "--------------------------"],
              ...games.map((x) => [x._id, x.name]),
            ]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setBoardType(e.target.value)
            }
          ></TextField>

          <DateField
            label="Start"
            value={start}
            onChange={(val: Date) => setStart(val)}
          ></DateField>

          <ButtonStrip>
            <div>
              <Button to="/">Cancel</Button>
              <Button type="submit">Save</Button>
            </div>
          </ButtonStrip>
        </form>
      </Page>
    </div>
  );
};

export default CreateSession;
