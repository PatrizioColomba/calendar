export class Week {
	private day: Date[] = new Array<Date>(7);

	constructor(target: Date) {
		for (let i = 0; i < 7; i++) {
			this.day[i] = new Date(
				target.getFullYear(),
				target.getMonth(),
				target.getDate() - target.getDay() + i + 1 );
		}
	}

	days(): Date[] {
		return this.day;
	}
}
