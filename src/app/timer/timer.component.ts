import {Component, OnInit, EventEmitter, Output, Input} from "@angular/core"
import set = Reflect.set

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.css"]
})
export class TimerComponent implements OnInit {

  constructor() {

    this.currentValue = 0
    this.timer = null
  }

  @Input()
  name: string
  timer: any
  currentValue: number
  @Output()
  tick: EventEmitter<number> = new EventEmitter<number>()

  start(): void {
    console.log(this.name)
    if (this.timer) return
    this.timer = setInterval(() => this.count(), 1000)

  }

  stop(): void {
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
    }
  }

  private count(): void {
    this.currentValue++
    this.tick.emit(this.currentValue)
  }

  ngOnInit(): void {
  }
}
