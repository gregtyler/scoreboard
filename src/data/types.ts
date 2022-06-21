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
  game: Game | Reference;
  location: Location | Reference;
  players: (Player | Reference)[];
  rounds: Round[];
};

export type Round = {
  label?: string;
  scores: Score[];
};

export type Score = {
  player: number;
  value: number;
};
