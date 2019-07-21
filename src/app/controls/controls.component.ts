import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { formatDate } from '@angular/common';
import { Interval } from '../interval';
import { CalendarService } from '../calendar.service';

@Component({
	selector: 'app-controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.css']
})

export class ControlsComponent implements OnInit {

	interval: Interval;
	date: Date;
	dateStr: string;

	constructor(private calendarService: CalendarService) {
		this.interval = calendarService.getInterval();
		this.date = this.interval.start;
		this.intervalStr();
	}

	ngOnInit() {
		this.calendarService.calendarEmitter.subscribe(
			(interval: Interval) => {
				this.interval = interval;
				this.intervalStr();
			}
		);
	}

	onClick(cmd: string) {
		let dayNumber: number = this.interval.start.getDate();
		switch (cmd) {

			case 'prev':
				dayNumber--;
				break;

			case 'next':
				dayNumber++;
				break;

			default:
				break;
		}
		this.date.setDate(dayNumber);
		this.calendarService.setInterval(new Interval(this.date, this.date));
	}

	intervalStr() {
		this.dateStr = formatDate(
			this.interval.start,
			'dd MMMM yyyy', 'en');
	}

	changeView() {
		let i = 0;
		i++;
	}

}
