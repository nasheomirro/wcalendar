import { SvelteMap } from "svelte/reactivity";
import type { Win, WinAttributes } from "../types";
import { openAppDB, type AppDB } from "./db";
import { nanoid } from "nanoid";

/** interface for CRUD on the db and single source of truth for stored data */
class App {
  #db: AppDB;
  #wins = new SvelteMap<string, Win>();

  constructor(db: AppDB, wins: Win[]) {
    this.#db = db;
    wins.forEach((win) => this.#wins.set(win.id, win));
  }

  get wins() {
    return [...this.#wins.values()];
  }

  async createWin(attributes: WinAttributes, date: Date = new Date()) {
    const win: Win = {
      id: nanoid(),
      date,
      attributes,
    };

    await this.#db.add("wins", win);
    this.#wins.set(win.id, win);
  }

  /** updates the win's attributes, note that you cannot update it's date */
  async updateWin(id: string, attributes: WinAttributes) {
    const old = this.#wins.get(id);
    if (old) {
      const win = {
        ...old,
        attributes,
      };

      await this.#db.put("wins", win);
      this.#wins.set(win.id, win);
    }
  }

  async deleteWin(id: string) {
    await this.#db.delete("wins", id);
    this.#wins.delete(id);
  }
}

const db = await openAppDB();
const wins = await db.getAll("wins");
export const app = new App(db, wins);
