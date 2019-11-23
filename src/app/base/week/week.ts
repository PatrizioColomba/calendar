export class Week {
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
        this.day.getDate() - this.day.getDay() + i);
    }

    return weekDay;
  }

  public getMonday(): Date {
    return this.days()[0];
  }
}
