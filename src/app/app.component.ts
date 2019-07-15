import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   date = formatDate(new Date().toDateString(), 'dd MMMM yyyy', 'en');
   title = 'calendar';
}
