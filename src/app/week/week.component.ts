import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';
import { CalendarService } from '../calendar.service';
import { Interval } from '../interval';

@Component({
	selector: 'app-week',
	templateUrl: './week.component.html',
	styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

	interval: Interval;
	dStr: string;

	constructor(private calendarService: CalendarService) {
	}

	ngOnInit() {
		this.dStr = formatDate(
			this.calendarService.getInterval().start.toDateString(), 'dd', 'en');
		this.calendarService.calendarEmitter.subscribe(
			(interval: Interval) => {
				this.interval = interval;
				this.dStr = formatDate(
					this.interval.start.toDateString(), 'dd', 'en');
			}
		);
	}

}
