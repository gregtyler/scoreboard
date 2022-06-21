import { Session } from "./types";

const migrations = [
  (data: any) => data,
  (data: any) => {
    return {
      ...data,
      sessions: data.sessions.map((session: Session) => ({
        ...session,
        config: { scoreMode: "discrete" },
      })),
    };
  },
];

export default migrations;
