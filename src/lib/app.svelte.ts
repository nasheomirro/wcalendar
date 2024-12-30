import { SvelteMap } from "svelte/reactivity";
import type { DaySummary, DaySummaryRecords } from "./types";
import { openAppDB, type AppDB } from "./db";
import { nanoid } from "nanoid";

class App {
  #db: AppDB;
  #summaries = new SvelteMap<string, DaySummary>();

  constructor(db: AppDB, initialSummaries: DaySummary[]) {
    this.#db = db;
    initialSummaries.forEach((day) => {
      this.#summaries.set(day.id, day);
    });
  }

  get summaries() {
    return [...this.#summaries.values()];
  }

  async createSummary() {
    const newSummary: DaySummary = {
      id: nanoid(),
      date: new Date(),
      records: {
        loses: [],
        mids: [],
        wins: [],
      },
    };

    await this.#db.add("summaries", newSummary);
    this.#summaries.set(newSummary.id, newSummary);
  }

  async setSummaryRecords(id: string, records: DaySummaryRecords) {
    const oldSummary = this.#summaries.get(id);
    if (oldSummary) {
      const newSummary: DaySummary = {
        ...oldSummary,
        records,
      };

      await this.#db.put("summaries", newSummary);
      this.#summaries.set(newSummary.id, newSummary);
    }
  }
}

const db = await openAppDB();
const summaries = await db.getAll("summaries");
export const app = new App(db, summaries);
