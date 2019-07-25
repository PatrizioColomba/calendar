import { Component, OnInit } from '@angular/core';
import { Interval } from '../interval';
import { CalendarService } from '../calendar.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.css']
})

export class ControlsComponent implements OnInit {

	dateStr: string;
	path: string[] = ['/year', '/month'];
	i = 0;

	constructor(private calendarService: CalendarService, private router: Router) {
		this.intervalStr();
	}

	ngOnInit() {
		this.calendarService.calendarEmitter.subscribe(
			(interval: Interval) => {
				this.intervalStr();
			}
		);
	}

	onClick(cmd: string) {
		switch (cmd) {

			case 'prev':
				this.calendarService.getInterval().decrement();
				break;

			case 'next':
				this.calendarService.getInterval().increment();
				break;

			default:
				break;
		}
		this.calendarService.setInterval(this.calendarService.getInterval());
	}

	intervalStr() {
		this.dateStr = this.calendarService.getInterval().toString();
	}

	switchComponent() {
		this.i = this.i === this.path.length - 1 ? 0 : 1;
		this.router.navigate([this.path[this.i]]);
	}

}
