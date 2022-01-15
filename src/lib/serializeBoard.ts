import { Board, SerializedBoard } from "./types";

export default function serializeBoard(board: Board): SerializedBoard {
  const { players, rounds, ...restOfBoard } = board;
  const data = [
    board.type,
    ...Object.entries(players).map(([id, label]) => `@${id}:${label}`),
    ...rounds.map((round) => [
      ...round.events.map(
        ({ amount, playerId }) =>
          `${Math.sign(amount) === -1 ? "-" : "+"}${Math.abs(
            amount
          )} ${playerId}`
      ),
      "---",
    ]),
  ];

  // Remove trailing '---'
  data.splice(data.length - 1, 1);

  return { ...restOfBoard, data: data.flat().join("\n") };
}
