export type State = {
  games: Game[];
  locations: Location[];
  players: Player[];
  sessions: Session[];
};

export type Reference = {
  _id: string;
};

export type Game = {
  _id: string;
  name: string;
  image?: string;
  config: {
    scoreMode: "continuous" | "discrete";
  };
};

export type Location = {
  _id: string;
  name: string;
  icon?: string;
};

export type Player = {
  _id: string;
  name: string;
};

export type Session = {
  _id: string;
  title: string;
  start: string;
  end?: string;
  labels?: string[];
  gameId: string;
  locationId: string;
  playerIds: string[];
};

export interface SessionWithRelations extends Session {
  game: Game;
  location: Location;
  players: Player[];
  rounds: Round[];
}

export type Round = {
  sessionId: string;
  index: number;
  label?: string;
};

export type Score = {
  sessionId: string;
  roundIndex: number;
  playerId: string;
  value: number;
};
