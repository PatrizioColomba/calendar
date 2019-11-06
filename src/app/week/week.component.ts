import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from '../base/calendar.service';
import { Interval } from '../base/interval';
import { Mode } from '../base/mode';
import { Week } from '../base/week/week';

@Component({
	selector: 'app-week',
  templateUrl: './week.component.html',
	styleUrls: ['./week.component.css'],
})
export class WeekComponent implements OnInit {

	@Input() target: Date;
	@Input() week: Week;
	interval: Interval;
	dStr: number;

	constructor(private calendarService: CalendarService) {
		if (!this.week) {
			this.week = new Week(calendarService.getInterval().day);
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
