import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
	selector: 'app-controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

	@Input() d: Date;
	date: Date;
	dateStr: string;

	constructor() {
		this.date = new Date();
		this.dateStr = formatDate(
			this.date.toDateString(), 'dd MMMM yyyy', 'en');
	}

	ngOnInit() {
	}

	onClick(cmd: string) {
		let dayNumber: number = this.date.getDate();
		switch (cmd) {

			case 'prev':
				dayNumber--;
				break;

			case 'next':
				dayNumber++;
				break;

			default:
				break;
		}
		this.date = new Date(
			this.date.getFullYear(),
			this.date.getMonth(), dayNumber);
		this.dateStr = formatDate(this.date, 'dd MMMM yyyy', 'en');
	}

	changeView() {
		let i = 0;
		i++;
	}

}
