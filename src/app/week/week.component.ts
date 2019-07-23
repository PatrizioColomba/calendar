import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { Interval } from '../interval';

@Component({
	selector: 'app-week',
	templateUrl: './week.component.html',
	styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

	interval: Interval;
	dStr: number;

	constructor(private calendarService: CalendarService) {
	}

	ngOnInit() {
		this.interval = this.calendarService.getInterval();
		this.calendarService.calendarEmitter.subscribe(
			(interval: Interval) => {
				this.interval = interval;
			}
		);
	}

}
