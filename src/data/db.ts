import Dexie, { Table } from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import { useMemo } from "react";

import {
  Game,
  Location,
  Player,
  Round,
  Score,
  Session,
  SessionWithRelations
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
  return (
    useLiveQuery(async () => {
      const sessions = await db.sessions.toCollection().sortBy("start");

      if (sessions === undefined) return [];

      return Promise.all(
        sessions.map(async (session) => {
          const [game, location, players, rounds] = await Promise.all([
            db.games.get(session.gameId),
            db.locations.get(session.locationId),
            db.players.where("_id").anyOf(session.playerIds).toArray(),
            db.rounds.where({ sessionId: session._id }).sortBy("index"),
          ]);

          if (game === undefined || location === undefined) {
            throw new Error("Not found");
          }

          return {
            ...session,
            game,
            location,
            players,
            rounds,
          };
        })
      );
    }) ?? []
  );
}
export function useSession(
  id: string
): [SessionWithRelations | undefined, (session: Session) => void, () => void] {
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
    const data: Session = {
      _id: newSession._id,
      title: newSession.title,
      start: newSession.start,
      gameId: newSession.gameId,
      locationId: newSession.locationId,
      playerIds: newSession.playerIds,
    };

    if (newSession.end) data.end = newSession.end;
    if (newSession.labels) data.labels = newSession.labels;

    db.sessions.put(data, id);
  }

  async function deleteSession() {
    if (session) {
      const scores = await db.scores.where({ sessionId: id }).toArray();

      db.scores.bulkDelete(
        scores.map((score) => [
          score.sessionId,
          score.roundIndex,
          score.playerId,
        ])
      );
      db.rounds.bulkDelete(
        session.rounds.map((round) => [round.sessionId, round.index])
      );
      db.sessions.delete(id);
    }
  }

  return [session, setSession, deleteSession];
}

type ScoreMap = { [playerId: string]: number };

export function useTotalScores(sessionId: string): ScoreMap {
  const scores = useLiveQuery(() =>
    db.scores
      .where({
        sessionId: sessionId,
      })
      .toArray()
  );

  const totals = useMemo(
    () =>
      scores?.reduce((sums, score) => {
        if (!sums[score.playerId]) sums[score.playerId] = 0;

        sums[score.playerId] += score.value;

        return sums;
      }, {} as ScoreMap),
    [scores]
  );

  return totals ?? {};
}
