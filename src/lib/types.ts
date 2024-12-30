export type SummaryWin = {
  readonly id: string;
  reason: string;
  stregth: 1 | 2 | 3;
};

export type DaySummary = {
  readonly id: string;
  readonly date: Date;
  wins: SummaryWin[];
};
