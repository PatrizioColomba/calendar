import { Injectable, EventEmitter } from '@angular/core';
import { Interval } from './interval';

@Injectable({
	providedIn: 'root'
})
export class CalendarService {

	interval: Interval;
	calendarEmitter = new EventEmitter<Interval>();

	constructor() {
		this.interval = new Interval(new Date(), new Date());
	}

	getInterval(): Interval {
		return this.interval;
	}

	setInterval(interval: Interval) {
		this.interval = interval;
		this.calendarEmitter.emit(this.interval);
	}
}
