import { Month } from './../month/month';
import { Interval } from '../interval';

export class Year implements Interval {
  public static readonly LEN: number = 12;
  private year: number;

  constructor(year: number) {
    this.year = year;
  }

  public months(): Month[] {
    let months: Month[] = new Array<Month>(Year.LEN);

    for(let i = 0; i < Year.LEN; i++) {
      months[i] = new Month(i, this.year);
    }

    return months;
  }

  public increment(): Year {
    return new Year(this.year + 1);
  }
  public decrement(): Year {
    return new Year(this.year - 1);
  }

  public getDate(): number {
    return 1;
  }

  public getMonth(): number {
    return 0;
  }

  public getFullYear(): number {
    return this.year;
  }

  public toString(): string {
    return ""+this.year;
  }
}
