import { openDB, type IDBPDatabase, type DBSchema } from "idb";
import type { DaySummary } from "./types";

const DB_NAME = "wcalendar-db";

interface AppDBSchema extends DBSchema {
  summaries: {
    key: string;
    value: DaySummary;
  };
}

export type AppDB = IDBPDatabase<AppDBSchema>;

export function openAppDB() {
  return openDB<AppDBSchema>(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore("summaries", { keyPath: "id" });
    },
  });
}
