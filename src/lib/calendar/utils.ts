export function getDaysInMonth(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth();

  // Create a new date object for the first day of the next month
  // Setting day to 0 gives us the last day of the current month
  const nextMonth = new Date(year, month + 1, 0);
  return nextMonth.getDate(); // Returns the number of days in the current month
}

export function getFirstDayOfMonth(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth();

  // Create a new date for the first day of the given month
  const firstDayOfMonth = new Date(year, month, 1);
  return firstDayOfMonth.getDay();
}

export function isSameMonthAndYear(date1: Date, date2: Date): boolean {
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();

  return year1 === year2 && month1 === month2;
}

export function isSameDate(date1: Date, date2: Date): boolean {
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();

  return year1 === year2 && month1 === month2 && day1 === day2;
}
