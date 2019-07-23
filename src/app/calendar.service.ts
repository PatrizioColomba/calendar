import { Injectable, EventEmitter } from '@angular/core';
import { Interval } from './interval';
import { Mode } from './mode';

@Injectable({
	providedIn: 'root'
})
export class CalendarService {

	private interval: Interval;
	calendarEmitter = new EventEmitter<Interval>();

	constructor() {
		this.interval = new Interval(new Date(), Mode.Week);
	}

	getInterval(): Interval {
		return this.interval;
	}

	setInterval(interval: Interval) {
		this.interval = interval;
		this.calendarEmitter.emit(this.interval);
	}
}
