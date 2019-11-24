import { Component, OnInit } from '@angular/core';
import { Interval } from '../base/interval';
import { CalendarService } from '../base/calendar.service';
import { Router } from '@angular/router';
import { Mode } from '../base/mode';

@Component({
	selector: 'app-controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.css']
})

export class ControlsComponent implements OnInit {

	public dateStr: string;

	constructor(private calendarService: CalendarService, private router: Router) {
		this.dateStr = this.calendarService.getInterval().toString();
	}

	ngOnInit() {
		this.calendarService.calendarEmitter.subscribe(
			(interval: Interval) => {
				this.dateStr = this.calendarService.getInterval().toString();
			}
		);
	}

	onClick(cmd: string) {
		switch (cmd) {
			case 'prev':
				this.calendarService.setInterval(
					this.calendarService.getInterval().decrement()
				);
				break;

			case 'next':
				this.calendarService.setInterval(
					this.calendarService.getInterval().increment()
				);
				break;

			default:
				break;
		}
		this.dateStr = this.calendarService.getInterval().toString();
	}

	public switchComponent() {
		let mode: Mode = this.calendarService.getMode();
		switch(mode) {
			case Mode.Month:
				mode = Mode.Year;
			break;

			case Mode.Week:
				mode = Mode.Month;
			break;

			case Mode.Year:
				mode = Mode.Month;
			break;
		}
		this.router.navigate(["/"+mode]);
		this.calendarService.setMode(mode);
		this.dateStr = this.calendarService.getInterval().toString();
	}
}
