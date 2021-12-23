export default function parseBoard(board: SerializedBoard) {
  const { data, ...restOfBoard } = board;
  const players = [];
  const events = [];
  let headerFinished = false;
  let a;

  data.split("\n").forEach((line) => {
    if (typeof line === "undefined") {
      return;
    }

    if (line.match(/^[=]{3,}$/)) {
      headerFinished = true;
    } else if ((a = line.match(/^@(.+?)$/))) {
      players.push(a[1].trim());
    } else if ((a = line.match(/^(\+|-)(\d+) (\d)$/))) {
      events.push({
        dir: a[1],
        amount: a[2],
        playerId: a[3],
      });
    }
  });

  return { ...restOfBoard, players, events };
}
