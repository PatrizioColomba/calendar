import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { Interval } from '../interval';
import { Mode } from '../mode';

@Component({
	selector: 'app-month',
	templateUrl: './month.component.html',
	styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

	@Input() target;
	interval: Interval;
	week: Date[] = new Array<Date>(5);

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
				this.week[0] = new Date(2019, this.interval.getMonth(), 0);
				this.week[1] = new Date(2019, this.interval.getMonth(), 8);
				this.week[2] = new Date(2019, this.interval.getMonth(), 16);
				this.week[3] = new Date(2019, this.interval.getMonth(), 24);
				this.week[4] = new Date(2019, this.interval.getMonth(), 31);
			}
		);
		this.calendarService.setInterval(this.calendarService.getInterval());
	}

}
