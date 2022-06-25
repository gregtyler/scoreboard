import Dexie, { Table } from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import {
  Game,
  Location,
  Player,
  Round,
  Score,
  Session,
  SessionWithRelations,
} from "./types";

export class MySubClassedDexie extends Dexie {
  games!: Table<Game>;
  locations!: Table<Location>;
  players!: Table<Player>;
  sessions!: Table<Session>;
  rounds!: Table<Round>;
  scores!: Table<Score>;

  constructor() {
    super("scoreboard");
    this.version(2).stores({
      sessions: "_id, gameId, locationId",
    });

    this.version(1).stores({
      games: "_id",
      locations: "_id",
      players: "_id",
      sessions: "_id",
      rounds: "&[sessionId+index]",
      scores: "&[sessionId+roundIndex+playerId], playerId",
    });
  }
}

export const db = new MySubClassedDexie();

export function useGames() {
  return useLiveQuery(() => db.games.toCollection().sortBy("name")) ?? [];
}
export function useGame(id: string): [Game | undefined, (game: Game) => void] {
  const game = useLiveQuery(() => db.games.get(id));

  function setGame(newGame: Game) {
    db.games.put(newGame, id);
  }

  return [game, setGame];
}

export function usePlayers() {
  return useLiveQuery(() => db.players.toCollection().sortBy("name")) ?? [];
}
export function usePlayer(
  id: string
): [Player | undefined, (player: Player) => void] {
  const player = useLiveQuery(() => db.players.get(id));

  function setPlayer(newPlayer: Player) {
    db.players.put(newPlayer, id);
  }

  return [player, setPlayer];
}

export function useLocations() {
  return useLiveQuery(() => db.locations.toCollection().sortBy("name")) ?? [];
}
export function useLocation(
  id: string
): [Location | undefined, (location: Location) => void] {
  const location = useLiveQuery(() => db.locations.get(id));

  function setLocation(newLocation: Location) {
    db.locations.put(newLocation, id);
  }

  return [location, setLocation];
}

export function useSessions(): SessionWithRelations[] {
  return useLiveQuery(() => db.sessions.toCollection().sortBy("start")) ?? [];
}
export function useSession(
  id: string
): [SessionWithRelations | undefined, (session: Session) => void] {
  const session = useLiveQuery(async () => {
    const sess = await db.sessions.get(id);
    if (typeof sess === "undefined") throw new Error("Session not found");

    const [game, location, players, rounds] = await Promise.all([
      db.games.get(sess.gameId),
      db.locations.get(sess.locationId),
      db.players.where("_id").anyOf(sess.playerIds).toArray(),
      db.rounds.where({ sessionId: sess._id }).sortBy("index"),
    ]);

    if (game === undefined || location === undefined) {
      throw new Error("Not found");
    }

    return {
      ...sess,
      game,
      location,
      players,
      rounds,
    };
  });

  function setSession(newSession: Session) {
    db.sessions.put(newSession, id);
  }

  return [session, setSession];
}
