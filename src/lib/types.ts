export type WinAttributes = {
  reason: string;
  stregth: 1 | 2 | 3;
}

export type Win = {
  readonly id: string;
  readonly date: Date;
  attributes: WinAttributes;
};
