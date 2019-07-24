import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { Interval } from '../interval';
import { Mode } from '../mode';

@Component({
	selector: 'app-week',
  	templateUrl: './week.component.html',
	styleUrls: ['./week.component.css'],
})
export class WeekComponent implements OnInit {

	@Input() target: Date;
	interval: Interval;
	dStr: number;

	constructor(
		private calendarService: CalendarService) {
		if (this.target) {
			this.interval = new Interval(this.target, Mode.Week);
		} else {
			this.interval = this.calendarService.getInterval();
		}
	}

	ngOnInit() {
		this.calendarService.calendarEmitter.subscribe(
			(interval: Interval) => {
				if (this.target) {
					this.interval = new Interval(this.target, Mode.Week);
				} else {
					this.interval = interval;
				}
			}
		);
		this.calendarService.setInterval(this.calendarService.getInterval());
	}

}
