import Dexie from "dexie";

const DATASTORE_BASE_URL = "http://localhost:8000";

let token: string | null = null;
async function getToken() {
  if (token === null) {
    const resp = await fetch(`${DATASTORE_BASE_URL}/auth/scoreboard_gt`);
    const json = await resp.json();

    token = json.jwt;
  }

  return token;
}

export async function pull(db: Dexie) {
  const token = await getToken();

  const resp = await fetch(`${DATASTORE_BASE_URL}/d/scoreboard_gt/main`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await resp.json();

  if (json !== null) {
    db.import(json);
  }
}

export async function push(db: Dexie) {
  const blob = await db.export();
  const body = await blob.text();

  await fetch(`${DATASTORE_BASE_URL}/d/scoreboard_gt/main`, {
    method: "PUT",
    body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
