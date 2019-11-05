import {Week} from './../week/week';

export class Month {

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
    let firstDay: Date = new Date(this.year, this.month, 1);
    let lastDay: Date = new Date(this.year, this.month+1, 0);
    let daysNum: number = lastDay.getDate() + firstDay.getDay() + 7 - lastDay.getDay();
    firstDay = firstDay = new Date(this.year, this.month, -firstDay.getDay()+1);

    for(let i = -firstDay.getDay()+1; i < daysNum; i+=7) {
      week.push(new Week(
         new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + i)));
    }

    return week;
  }
}
