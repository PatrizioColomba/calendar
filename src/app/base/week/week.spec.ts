import { Week } from './week';

describe('Week', () => {
  it('should create an instance', () => {
    expect(new Week(new Date())).toBeTruthy();
  });
});
