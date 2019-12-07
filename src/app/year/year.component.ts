import { Component, OnInit, Input } from '@angular/core';
import { Year } from '../base/year/year';
import { Mode } from '../base/mode';
import { ActivatedRoute } from '@angular/router';
import { CalendarService } from '../base/calendar.service';
import { Interval } from '../base/interval';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  @Input() year: Year;

  constructor(private route: ActivatedRoute, private calendarService: CalendarService) {}

  ngOnInit() {
    let year: number = +this.route.snapshot.paramMap.get("year");
		if (!this.year) {
      let date: Date = new Date();
			this.year = new Year(year);
		}
  }

	ngAfterViewChecked() {
		this.calendarService.setInterval(this.year);
		this.calendarService.setMode(Mode.Year);
	}

}
