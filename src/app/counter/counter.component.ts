import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() {
    this.name = "default value";
    this.countValue = 0;
    this.step = 1;
  }

  @Input()
  name: string;
  @Input()
  countValue: number;

  @Input()
  step: number;

  ngOnInit(): void {
  }

  increment(): void {
    this.countValue += this.step;
  }

}
