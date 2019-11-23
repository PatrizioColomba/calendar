import { Month } from './month';
import { Week } from './../week/week';
import { MonthMock } from './month.mock';

describe('Month', () => {
  it('should create an instance', () => {
    let month = new Month(MonthMock.MONTH_NUMBER, MonthMock.YEAR);
    expect(month).toBeTruthy();
  });

  it('should set a mew value for month and create an instance', () => {
    let month = new Month(MonthMock.MONTH_NUMBER, MonthMock.YEAR);
    month = month.setMonth(MonthMock.MONTH_NUMBER+1);
    expect(month).toBeTruthy();
  });

  it('should set a new value for year and create an instance', () => {
    let month = new Month(MonthMock.MONTH_NUMBER, MonthMock.YEAR);
    month = month.setYear(MonthMock.YEAR+1);
    expect(month).toBeTruthy();
  });

  it('should return a Monday', () => {
    let month = new Month(MonthMock.MONTH_NUMBER, MonthMock.YEAR);
    month = month.setYear(MonthMock.YEAR+1);
    let week: Week = month.weeks()[0];
    let day: Date = week.days()[0];
    expect(day.getDay()).toEqual(1);
  });

  it('should return a Sunday', () => {
    let month = new Month(MonthMock.MONTH_NUMBER, MonthMock.YEAR);
    month = month.setYear(MonthMock.YEAR+1);
    let weeksLen = month.weeks().length;
    let week: Week = month.weeks()[weeksLen-1];
    let day: Date = week.days()[6];
    expect(day.getDay()).toEqual(0);
  });

  it('should return '+MonthMock.FIRST_WEEK_MONDAY_DAY, () => {
    let month = new Month(MonthMock.MONTH_NUMBER-1, MonthMock.YEAR);
    let day = month.weeks()[0].days()[0].getDate();
    expect(day).toEqual(MonthMock.FIRST_WEEK_MONDAY_DAY);
  });

  it('should return '+MonthMock.LAST_WEKK_SUNDAY_DAY, () => {
    let month = new Month(MonthMock.MONTH_NUMBER-1, MonthMock.YEAR);
    let day = month.weeks()[month.weeks().length-1].days()[6].getDate();
    expect(day).toEqual(MonthMock.LAST_WEKK_SUNDAY_DAY);
  });

  it('should return '+MonthMock.DAYS_NUMBER, () => {
    let firstDay: Date = new Date(MonthMock.YEAR, MonthMock.MONTH_NUMBER-1, 1);
    let lastDay: Date = new Date(MonthMock.YEAR, MonthMock.MONTH_NUMBER, 0);
    let daysNum: number = lastDay.getDate() + (firstDay.getDay() == 0 ? 6 : 0) +
      (firstDay.getDay() > 1 ? firstDay.getDay() - 1 : 0) + 7 - lastDay.getDay();

    expect(daysNum).toEqual(MonthMock.DAYS_NUMBER);
  });
});
