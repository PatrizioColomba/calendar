import { Mode } from './mode';
import { formatDate } from '@angular/common';
import { Week } from './week/week';

export class Interval {
	private mode: Mode = Mode.Week;
	private delta = 7;
	public day: Date;
	private week: Week;

	constructor(day: Date, mode: Mode) {
		this.day = day;
		this.setMode(mode);
		this.week = new Week(day);
	}

	public toString = (): string => {
		if (this.mode === Mode.Week) {
			return this.printWeek();
		} else if (this.mode === Mode.Month) {
			return this.printMonth();
		}
		return 'error in interval mode';
	}

	weekDays(): Date[] {
		return this.week.days();
	}

	getMonth(): number {
		return this.day.getMonth();
	}

	getDelta(): number {
		return this.delta;
	}

	getMode(): Mode {
		return this.mode;
	}

	setMode(mode: Mode) {
		this.mode = mode;
		switch (mode) {
			case Mode.Week:
				this.delta = 7;
				break;
			case Mode.Month:
				this.delta = 1;
				break;
			default:
				break;
		}
	}

	printMonth(): string {
		return formatDate(new Date(
			this.day.getFullYear(),
			this.day.getMonth(),
			this.day.getDate(),
		), 'MMMM yyyy', 'en');
	}

	printWeek(): string {
		const startWeekStr = formatDate(
			this.week.days()[0],
			'dd MMMM', 'en');
		const endWeekStr = formatDate(
			this.week.days()[6],
			'dd MMMM', 'en');
		return startWeekStr + ' - ' + endWeekStr;
	}

	increment(): Interval {
		if (this.mode === Mode.Week) {
			const dayNumber = this.day.getDate() + this.delta;
			this.day.setDate(dayNumber);
		} else if (this.mode === Mode.Month) {
			const monthNumber = this.day.getMonth() + this.delta;
			this.day.setMonth(monthNumber);
		}
		this.week = new Week(this.day);
		return this;
	}

	decrement(): Interval {
		if (this.mode === Mode.Week) {
			const dayNumber = this.day.getDate() - this.delta;
			this.day.setDate(dayNumber);
		} else if (this.mode === Mode.Month) {
			const monthNumber = this.day.getMonth() - this.delta;
			this.day.setMonth(monthNumber);
		}
		this.week = new Week(this.day);
		return this;
	}
}
