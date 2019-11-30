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

	constructor(private calendarService: CalendarService) {
		if (!this.week) {
			this.week = calendarService.getInterval() as Week;
		}
	}

	ngOnInit() {
		this.calendarService.intervalEmitter.subscribe(
			(interval: Interval) => {
				this.week = interval as Week;
			}
		);
	}

	public onClick(date: Date) {
		this.calendarService.swichTo(Mode.Week, new Week(date));
	}
}
