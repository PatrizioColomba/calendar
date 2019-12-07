import { Interval } from '../interval';
import { formatDate } from '@angular/common';

export class Week implements Interval {
  public static readonly LEN: number = 7;
  private day: Date;

  constructor(day: Date) {
    this.day = day;
  }

  public days(): Date[] {
    let weekDay: Date[] = new Array<Date>(Week.LEN);

    for (let i = 0; i < Week.LEN; i++) {
      weekDay[i] = new Date(
        this.day.getFullYear(),
        this.day.getMonth(),
        this.day.getDate() - (this.day.getDay() == 0 ? Week.LEN : this.day.getDay()) + 1 + i);
    }

    return weekDay;
  }

  public getMonday(): Date {
    return this.days()[0];
  }

  public increment(): Week {
    return new Week(
              new Date(
                this.day.getFullYear(),
                this.day.getMonth(), this.days()[0].getDate() + Week.LEN));
  }

  public decrement(): Week {
    return new Week(
              new Date(
                this.day.getFullYear(),
                this.day.getMonth(), this.days()[0].getDate() - Week.LEN));
  }

  public getDate(): number {
    return this.day.getDate();
  }

  public getMonth(): number {
    return this.day.getMonth();
  }

  public getFullYear(): number {
    return this.day.getFullYear();
  }

  public toString(): string {
  	const start = formatDate(
  		this.days()[0],
  		'dd MMMM `yy', 'en');
  	const end = formatDate(
  		this.days()[6],
  		'dd MMMM `yy', 'en');
  	return start + ' - ' + end;
  }
}
