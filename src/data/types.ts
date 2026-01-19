export type State = {
  games: Game[];
  players: Player[];
  sessions: Session[];
};

export enum ScoreMode {
  Highest = "HIGHEST",
  Lowest = "LOWEST",
  Custom = "CUSTOM",
}

export type Game = {
  _id: string;
  name: string;
  image?: string;
  scoreMode: ScoreMode;
  template?: {
    rounds: { label: string; colour: string }[];
  };
};

export type Player = {
  _id: string;
  name: string;
};

export type Session = {
  _id: string;
  title: string;
  start: string;
  labels?: string[];
  gameId: string;
  playerIds: string[];
  customWinner?: string;
};

export interface SessionWithRelations extends Session {
  game: Game;
  players: Player[];
  rounds: Round[];
}

export type Round = {
  sessionId: string;
  index: number;
  label?: string;
  colour?: string;
};

export type Score = {
  sessionId: string;
  roundIndex: number;
  playerId: string;
  value: number;
};
