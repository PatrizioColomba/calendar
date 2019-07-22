import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { formatDate } from '@angular/common';
import { Interval } from '../interval';
import { CalendarService } from '../calendar.service';
import { Mode } from '../mode';

@Component({
	selector: 'app-controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.css']
})

export class ControlsComponent implements OnInit {

	interval: Interval;
	dateStr: string;

	constructor(private calendarService: CalendarService) {
		this.interval = calendarService.getInterval();
		this.interval.setMode(Mode.Week)
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
		switch (cmd) {

			case 'prev':
				this.interval.decrement();
				break;

			case 'next':
				this.interval.increment();
				break;

			default:
				break;
		}
		this.calendarService.setInterval(this.interval);
	}

	intervalStr() {
		this.dateStr = this.interval.toString();
	}

}
