import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { Interval } from '../interval';
import { Mode } from '../mode';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

	interval: Interval;

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
		this.interval = this.calendarService.getInterval();
		this.interval.setMode(Mode.Month);
		this.calendarService.setInterval(this.interval);
  }

}
