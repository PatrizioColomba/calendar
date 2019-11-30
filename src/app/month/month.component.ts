import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from '../base/calendar.service';
import { Interval } from '../base/interval';
import { Mode } from '../base/mode';
import { Month } from '../base/month/month';

@Component({
	selector: 'app-month',
	templateUrl: './month.component.html',
	styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

	@Input() target: Date;
	@Input() month: Month;

	constructor(private calendarService: CalendarService) {
		if(!this.month) {
			let date: Date = new Date();
			this.month = new Month(date.getMonth(), date.getFullYear());
			this.calendarService.setInterval(this.month);
		}
	}

	ngOnInit() {
		this.calendarService.intervalEmitter.subscribe(
			(interval: Interval) => {
					this.month = interval as Month;
			}
		);
	}

}
