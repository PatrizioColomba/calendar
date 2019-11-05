import { Component } from '@angular/core';
import { CalendarService } from './calendar.service';


@Component({
	providers: [CalendarService],
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor() { }

}
