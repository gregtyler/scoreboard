export type ScoreEvent = {
  amount: number;
  playerId: string;
};

export type Round = {
  events: ScoreEvent[];
};

export type Board = {
  id: String;
  type: String;
  created: Number;
  updated: Number;
  players: Record<string, String>;
  rounds: Round[];
};

export type SerializedBoard = {
  id: String;
  type: String;
  created: Number;
  updated: Number;
  data: String;
};
