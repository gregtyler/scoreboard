import { Board, SerializedBoard, Round } from "./types";

export default function parseBoard(board: SerializedBoard): Board {
  const { data, ...restOfBoard } = board;
  const players = {};
  const rounds = [];
  let headerFinished = false;
  let a;

  let round: Round = { events: [] };
  rounds.push(round);

  data.split("\n").forEach((line, index, arr) => {
    if (typeof line === "undefined") {
      return;
    }

    if (line.match(/^[=]{3,}$/)) {
      headerFinished = true;
    } else if ((a = line.match(/^@(.+):(.+)$/))) {
      players[a[1]] = a[2];
    } else if ((a = line.match(/^-{3,}$/))) {
      if (index !== arr.length - 1) {
        round = { events: [] };
        rounds.push(round);
      }
    } else if ((a = line.match(/^(\+|-)(\d+) (.+)$/))) {
      round.events.push({
        amount: (a[1] === "-" ? -1 : 1) * parseInt(a[2], 10),
        playerId: a[3],
      });
    }
  });

  return { ...restOfBoard, players, rounds };
}
