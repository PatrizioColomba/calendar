import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { Interval } from '../interval';
import { Mode } from '../mode';
import { Month } from '../base/month/month';
import { Week } from '../base/week/week';

@Component({
	selector: 'app-month',
	templateUrl: './month.component.html',
	styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

	@Input() target;
	interval: Interval;
	week: Week[];

	constructor(private calendarService: CalendarService) {
		this.interval = this.calendarService.getInterval();
		this.interval.setMode(Mode.Month);
		this.calendarService.setInterval(this.interval);
	}

	ngOnInit() {
		this.calendarService.calendarEmitter.subscribe(
			(interval: Interval) => {
				if (this.target) {
					this.interval = new Interval(this.target, Mode.Week);
				} else {
					this.interval = interval;
				}
				let month: Month = new Month(this.interval.day.getMonth(), this.interval.day.getFullYear());
				this.week = month.weeks();
			}
		);
		this.calendarService.setInterval(this.calendarService.getInterval());
	}

}
