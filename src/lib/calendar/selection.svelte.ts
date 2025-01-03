/** interface for the currently selected date */
class DateSelection {
  #currentDate = $state<Date>() as Date;

  constructor() {
    this.#currentDate = new Date; 
  }

  get currentDate() {
    return this.#currentDate;
  }

  setCurrentDate(date: Date) {
    this.#currentDate = date;
  }
}


export const selection = new DateSelection();