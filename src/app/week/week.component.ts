import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

	constructor(private route: ActivatedRoute, private calendarService: CalendarService) {}

	ngOnInit() {
		if(!this.week) {
			let day: number = +this.route.snapshot.paramMap.get("day");
			let month: number = +this.route.snapshot.paramMap.get("month");
			let year: number = +this.route.snapshot.paramMap.get("year");
			let date;
			if(day && month && year) {
				date = new Date(year, month, day);
			} else {
				date = new Date();
			}
			let week = new Week(date);
			this.week = week;
		}
	}

	ngAfterViewChecked() {
		this.calendarService.setInterval(this.week);
		this.calendarService.setMode(Mode.Week);
	}
}
