import { Month } from './month';
import { Week } from './../week/week';

const MONTH: number = 1;
const YEAR: number = 2022;

describe('Month', () => {
  it('should create an instance', () => {
    let month = new Month(MONTH, YEAR);
    expect(month).toBeTruthy();
  });

  it('should set a mew value for month and create an instance', () => {
    let month = new Month(MONTH, YEAR);
    month = month.setMonth(MONTH+1);
    expect(month).toBeTruthy();
  });

  it('should set a new value for year and create an instance', () => {
    let month = new Month(MONTH, YEAR);
    month = month.setYear(YEAR+1);
    expect(month).toBeTruthy();
  });

  it('should return a Monday', () => {
    let month = new Month(MONTH, YEAR);
    month = month.setYear(YEAR+1);
    let week: Week = month.weeks()[0];
    let day: Date = week.days()[0];
    expect(day.getDay()).toEqual(1);
  });

  it('should return a Sunday', () => {
    let month = new Month(MONTH, YEAR);
    month = month.setYear(YEAR+1);
    let weeksLen = month.weeks().length;
    let week: Week = month.weeks()[weeksLen-1];
    let day: Date = week.days()[6];
    expect(day.getDay()).toEqual(0);
  });
});
