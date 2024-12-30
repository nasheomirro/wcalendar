import { openDB, type IDBPDatabase, type DBSchema } from "idb";
import type { Win } from "../types";

const DB_NAME = "wcalendar-db";

interface AppDBSchema extends DBSchema {
  wins: {
    key: string;
    value: Win;
  };
}

export type AppDB = IDBPDatabase<AppDBSchema>;

export function openAppDB() {
  return openDB<AppDBSchema>(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore("wins", { keyPath: "id" });
    },
  });
}
