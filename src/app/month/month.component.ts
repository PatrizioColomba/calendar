import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from '../base/calendar.service';
import { ActivatedRoute } from '@angular/router';
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

	constructor(private route: ActivatedRoute, private calendarService: CalendarService) {}

	ngOnInit() {
		if(!this.month) {
			let month: number = +this.route.snapshot.paramMap.get("month");
			let year: number = +this.route.snapshot.paramMap.get("year");
			if(month && year) {
				this.month = new Month(month, year);
			}
			else {
				let date = new Date();
				this.month = new Month(date.getMonth(), date.getFullYear());
			}
		}
	}

	ngAfterViewChecked() {
		this.calendarService.setInterval(this.month);
		this.calendarService.setMode(Mode.Month);
	}

}
