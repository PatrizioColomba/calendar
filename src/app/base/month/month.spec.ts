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
});
