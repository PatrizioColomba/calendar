import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WeekComponent } from './week/week.component';
import { ControlsComponent } from './controls/controls.component';
import { CalendarService } from './calendar.service';
import { MonthComponent } from './month/month.component';

@NgModule({
	declarations: [
		AppComponent,
		WeekComponent,
		ControlsComponent,
		MonthComponent
	],
	imports: [
		RouterModule.forRoot([
			{
				path: '',
				redirectTo: '/week',
				pathMatch: 'full'
			},
			{
				path: 'week',
				component: WeekComponent,
			},
			{
				path: 'month',
				component: MonthComponent,
			}
		]),
		BrowserModule,
	],
	providers: [
		CalendarService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
