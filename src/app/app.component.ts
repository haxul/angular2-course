import { Component } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2-course';

  constructor(private dataService : DataService) {
  }

  viewInput() {
    console.log(this.dataService.getInput())
  }
}
