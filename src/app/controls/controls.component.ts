import { Component, OnInit } from '@angular/core';
import { Interval } from '../base/interval';
import { CalendarService } from '../base/calendar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Mode } from '../base/mode';
import { WeekComponent } from '../week/week.component';
import { Week } from '../base/week/week';import { Location } from '@angular/common';
import { NavigationEnd } from '@angular/router';
@Component({
	selector: 'app-controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.css']
})

export class ControlsComponent implements OnInit {

	public dateStr: string;
	public mode: Mode;
	public nextMode: Mode;
	public interval: Interval;
	isVisible: boolean = true;

	constructor(private router: Router, private route: ActivatedRoute, private calendarService: CalendarService) {
			this.dateStr = this.calendarService.getInterval().toString();
			this.dateUrl();
			this.mode = this.calendarService.getMode();
			this.router.routeReuseStrategy.shouldReuseRoute = function(){
				return false;
		 	}
	}

	ngOnInit() {
		this.calendarService.intervalEmitter.subscribe(
			(interval: Interval) => {
				this.dateStr = interval.toString();
				this.mode = this.calendarService.getMode();
				this.dateUrl();
			}
		);
	}

	public dateString() {
		let interval: Interval = this.calendarService.getInterval();
		return interval.toString();
	}

	public dateUrl() {
			let interval: Interval = this.calendarService.getInterval();
			let mode: Mode = this.calendarService.getMode();
			this.isVisible = true;
			switch(mode) {
				case Mode.Week:
					mode = Mode.Month;
					break;
				case Mode.Month:
					mode = Mode.Year;
					break;
				case Mode.Year:
					this.isVisible = false;
					mode = Mode.Month;
					break;
			}
			this.nextMode =  mode;
			this.interval = interval;
	}
}
