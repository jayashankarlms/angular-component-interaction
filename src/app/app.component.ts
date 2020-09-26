import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name : string = 'jaya shankar';
  public password : string = 'pass';
  public message : string;
    title = 'component-interaction';
}
