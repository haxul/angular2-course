import {Component, OnInit} from "@angular/core"

@Component({
  selector: "app-counter-host",
  templateUrl: "./counter-host.component.html",
  styleUrls: ["./counter-host.component.css"]
})
export class CounterHostComponent implements OnInit {

  constructor() {
  }

  tickHandler(event): void {
    console.log(event)
  }

  ngOnInit(): void {
  }

}
