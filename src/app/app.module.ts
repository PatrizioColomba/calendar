import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeekComponent } from './week/week.component';
import { ControlsComponent } from './controls/controls.component';

@NgModule({
	declarations: [
		AppComponent,
		WeekComponent,
		ControlsComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
