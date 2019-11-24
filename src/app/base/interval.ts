export interface Interval {
  increment(): Interval;
  decrement(): Interval;
  toString(): string;
}
