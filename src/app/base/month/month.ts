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
    let day: Date = new Date(this.year, this.month, 1);
    day = new Date(day.getFullYear(), day.getMonth(), day.getDate() - day.getDay() + 1 );
    let lastDay: Date = new Date(this.year, this.month+1, 0);
    lastDay = new Date(lastDay.getFullYear(), lastDay.getMonth(), lastDay.getDate() + 7 - lastDay.getDate() + 1);
    let i = 0;
    do {
        week.push(new Week(day));
        i += 7;
        day = new Date(this.year, this.month, day.getDate() + i);
    } while(day <= lastDay);
    /**
    let daysNum: number = lastDay.getDate() + (firstDay.getDay() == 0 ? 6 : 0) +
      (firstDay.getDay() > 1 ? firstDay.getDay() - 1 : 0) + 7 - lastDay.getDay();
    let n = 1;
    if(firstDay.getDay() == 0) {
      n = -14;
    } else if(firstDay.getDay() > 1) {
      n = -(firstDay.getDay() + 1)+2;
    }

    console.log(n);

    for(let i = -n; i < daysNum; i+=7) {
    }
    */
    return week;
  }
}
