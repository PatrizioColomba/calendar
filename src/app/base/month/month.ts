import { Week } from './../week/week';
import { Interval } from '../interval';
import { formatDate } from '@angular/common';

export class Month implements Interval {

  public static readonly NAME = [ "January", "February", "March", "April", "May", "June",
             "July", "August", "September", "October", "November", "December" ];
  private month: number;
  private year: number;

  constructor(month: number, year: number) {
    this.month = month;
    this.year = year;
  }

  public setMonth(month: number) {
    return new Month(month, this.year);
  }

  public setYear(year: number) {
    return new Month(this.month, year);
  }

  public weeks(): Week[] {
    let week: Week[] = new Array<Week>();
    let tempWeek: Week = new Week(new Date(this.year, this.month));
    let lastDay: Date = new Date(this.year, this.month+1, 0);
    let day = tempWeek.days()[0];

    do {
      week.push(tempWeek);
      day = new Date(day.getFullYear(), day.getMonth(), day.getDate() + Week.LEN);
      tempWeek = new Week(day);
    } while(day <= lastDay);

    return week;
  }

  public name(): string {
    return Month.NAME[this.month];
  }

  public increment(): Month {
    return this.setMonth(this.month + 1);
  }

  public decrement(): Month {
    return this.setMonth(this.month - 1);
  }

  public toString(): string {
  	return formatDate(new Date(this.year, this.month), 'MMMM yyyy', 'en');
  }

  public getDate(): number {
    return 1;
  }

  public getMonth(): number {
    return this.month;
  }

  public getFullYear(): number {
    return this.year;
  }
}
