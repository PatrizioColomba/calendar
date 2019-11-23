export class Week {
  private WEEK_LEN = 7;
  private day: Date;

  constructor(day: Date) {
    this.day = day;
  }

  public days(): Date[] {
    let weekDay: Date[] = new Array<Date>(this.WEEK_LEN);

    for (let i = 0; i < this.WEEK_LEN; i++) {
      weekDay[i] = new Date(
        this.day.getFullYear(),
        this.day.getMonth(),
        this.day.getDate() - this.day.getDay() + i + 1 );
    }

    return weekDay;
  }

  public getMonday(): Date {
    return this.days()[0];
  }
}
