export interface Interval {
  increment(): Interval;
  decrement(): Interval;
  toString(): string;
  getDate(): number;
  getMonth(): number;
  getFullYear(): number;
}
