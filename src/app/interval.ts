import { Mode } from './mode';
import { formatDate } from '@angular/common';

export class Interval {
	private mode: Mode = Mode.Week;
	private delta = 7;
	start: Date;
	finish: Date;

	constructor(start: Date, finish: Date) {
		this.start = start;
		this.finish = finish;
	}

	public toString = (): string => {
		if (this.mode === Mode.Week) {
			return this.printWeek();
		} else if (this.mode === Mode.Month) {
			return this.printMonth();
		}
		return 'error in interval mode';
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
			this.start.getFullYear(),
			this.start.getMonth(),
			this.start.getDate(),
		), 'MMMM', 'en');
	}

	printWeek(): string {
		const day: number = this.start.getDay();
		const startWeekStr = formatDate(new Date(
			this.start.getFullYear(),
			this.start.getMonth(),
			this.start.getDate() - day + 1
		), 'dd MMMM', 'en');
		const endWeekStr = formatDate(new Date(
			this.start.getFullYear(),
			this.start.getMonth(),
			this.start.getDate() - day + 7
		), 'dd MMMM', 'en');
		return startWeekStr + ' - ' + endWeekStr;
	}

	increment(): Interval {
		if (this.mode === Mode.Week) {
			const dayNumber = this.start.getDate() + this.delta;
			this.start.setDate(dayNumber);
		} else if (this.mode === Mode.Month) {
			const monthNumber = this.start.getMonth() + this.delta;
			this.start.setMonth(monthNumber);
		}
		return this;
	}

	decrement(): Interval {
		if (this.mode === Mode.Week) {
			const dayNumber = this.start.getDate() - this.delta;
			this.start.setDate(dayNumber);
		} else if (this.mode === Mode.Month) {
			const monthNumber = this.start.getMonth() - this.delta;
			this.start.setMonth(monthNumber);
		}
		return this;
	}
}
