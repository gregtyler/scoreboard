import { useState } from "react";
import migrations from "./migrations";
import { Game, Location, Player, Session, State } from "./types";

const KEY = "SCOREBOARD";
const CURRENT_VERSION = migrations.length - 1;
const CURRENT_DEFAULT: State = {
  games: [],
  locations: [],
  players: [],
  sessions: [],
};

function isValid(data: State) {
  for (const game of data.games) {
    if (
      !game._id.match(
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
      )
    ) {
      return false;
    }
  }

  return true;
}

function getStateFromStorage() {
  const saved = localStorage.getItem(KEY);
  const parsed = JSON.parse(saved || "null") || {
    _version: CURRENT_VERSION,
    ...CURRENT_DEFAULT,
  };

  let { _version, ...data } = parsed;

  if (_version < CURRENT_VERSION) {
    data = migrations
      .slice(_version)
      .reduce((prev, migration) => migration(prev), data);

    localStorage.setItem(
      KEY,
      JSON.stringify({
        _version: CURRENT_VERSION,
        ...data,
      })
    );
  }

  return data;
}

const state = getStateFromStorage();

interface DBTypeMap {
  games: Game[];
  players: Player[];
  locations: Location[];
  sessions: Session[];
}

export function useDB<K extends keyof DBTypeMap>(
  key: K
): [DBTypeMap[K], (val: DBTypeMap[K]) => void] {
  const [value, setValue] = useState<DBTypeMap[K]>(state[key]);

  const setValueValidated = (val: DBTypeMap[K]): void => {
    const newState = {
      ...state,
      [key]: val,
    };

    if (!isValid(newState)) {
      return;
    }

    state[key] = val;
    setValue(val);
    localStorage.setItem(
      KEY,
      JSON.stringify({
        _version: CURRENT_VERSION,
        ...newState,
      })
    );
  };

  return [value, setValueValidated];
}
