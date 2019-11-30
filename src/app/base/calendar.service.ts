import { Injectable, EventEmitter } from '@angular/core';
import { Interval } from './interval';
import { Mode } from './mode';
import { Week } from './week/week';

@Injectable({
	providedIn: 'root'
})
export class CalendarService {
	private mode: Mode = Mode.Week;
	private interval: Interval;
	intervalEmitter = new EventEmitter<Interval>();
	modeEmitter = new EventEmitter<Mode>();

	constructor() {
		this.interval = new Week(new Date());
	}

	public getInterval(): Interval {
		return this.interval;
	}

	public setInterval(interval: Interval) {
		this.interval = interval;
		this.intervalEmitter.emit(this.interval);
	}

	public setMode(mode: Mode) {
		this.mode = mode;
		this.intervalEmitter.emit(this.interval);
	}

	public getMode() {
		return this.mode;
	}

	public swichTo(mode: Mode, interval: Interval) {
		this.mode = mode;
		this.interval = interval;
		this.intervalEmitter.emit(this.interval);
		this.modeEmitter.emit(this.mode);
	}
}
