import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	date: Date;
	dateStr: string;
	title = 'calendar';

	constructor() {
		this.date = new Date();
		this.dateStr = formatDate(
		this.date.toDateString(), 'dd MMMM yyyy', 'en');
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
