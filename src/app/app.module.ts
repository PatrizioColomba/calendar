import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeekComponent } from './week/week.component';
import { CalendarService } from './base/calendar.service';
import { MonthComponent } from './month/month.component';
import { YearComponent } from './year/year.component';
import { ControlsComponent } from './controls/controls.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/week',
		pathMatch: 'full'
	},
	{
		path: 'week/:day/:month/:year',
		component: WeekComponent,
	},
	{
		path: 'week',
		component: WeekComponent,
	},
	{
		path: 'month/:month/:year',
		component: MonthComponent,
	},
	{
		path: 'month/:day/:month/:year',
		component: MonthComponent,
	},
	{
		path: 'month',
		component: MonthComponent,
	},
	{
		path: 'year',
		component: YearComponent,
	},
	{
		path: 'year/:day/:month/:year',
		component: YearComponent,
	}
];

@NgModule({
	declarations: [
		AppComponent,
		WeekComponent,
		MonthComponent,
		YearComponent,
		ControlsComponent,
	],
	imports: [
		RouterModule.forRoot(appRoutes, { enableTracing: true }),
		BrowserModule,
	],
	providers: [
		CalendarService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
