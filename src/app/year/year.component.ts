import { Component, OnInit, Input } from '@angular/core';
import { Year } from '../base/year/year';
import { CalendarService } from '../base/calendar.service';
import { Interval } from '../base/interval';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  @Input() year: Year;

  constructor(private calendarService: CalendarService) {
		if (!this.year) {
      let date: Date = new Date();
			this.year = new Year(date.getFullYear());
      calendarService.setInterval(this.year);
		}
  }

  ngOnInit() {
		this.calendarService.intervalEmitter.subscribe(
			(interval: Interval) => {
				this.year = interval as Year;
			}
		);
  }

}
