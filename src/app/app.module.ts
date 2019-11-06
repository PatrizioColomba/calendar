import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WeekComponent } from './week/week.component';
import { CalendarService } from './base/calendar.service';
import { MonthComponent } from './month/month.component';
import { YearComponent } from './year/year.component';
import { ControlsComponent } from './controls/controls.component';

@NgModule({
	declarations: [
		AppComponent,
		WeekComponent,
		MonthComponent,
		YearComponent,
		ControlsComponent,
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
			},
			{
				path: 'year',
				component: YearComponent,
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
