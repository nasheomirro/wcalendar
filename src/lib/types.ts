export type DaySummaryRecords = {
  wins: string[];
  mids: string[];
  loses: string[];
};

export type DaySummary = {
  readonly id: string;
  readonly date: Date;
  records: DaySummaryRecords;
};
