import { Component } from '@angular/core';
import { Mode } from './mode';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	start: Date;
	finishe: Date;
	mode: Mode;
	title = 'calendar';

	constructor() {
	}
}
