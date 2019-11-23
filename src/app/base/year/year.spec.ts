import { Year } from './year';
import { YearMock } from './year.mock';

describe('Year', () => {
  it('should create an instance', () => {
    expect(new Year(YearMock.NUMBER)).toBeTruthy();
  });
});
