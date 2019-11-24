import { Injectable, EventEmitter } from '@angular/core';
import { Interval } from './interval';
import { Mode } from './mode';
import { Week } from './week/week';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class CalendarService {
	private mode: Mode = Mode.Week;
	private interval: Interval;
	calendarEmitter = new EventEmitter<Interval>();

	constructor(private router: Router) {
		this.interval = new Week(new Date());
	}

	public getInterval(): Interval {
		return this.interval;
	}

	public setInterval(interval: Interval) {
		this.interval = interval;
		this.calendarEmitter.emit(this.interval);
	}

	public setMode(mode: Mode) {
		this.mode = mode;
		this.calendarEmitter.emit(this.interval);
	}

	public getMode() {
		return this.mode;
	}

	public swichTo(mode: Mode, interval: Interval) {
		this.router.navigate(["/"+mode]);
		this.setMode(mode);
		this.setInterval(interval);
	}
}
