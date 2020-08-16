import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core"

@Component({
  selector: "app-message-box",
  templateUrl: "./message-box.component.html",
  styleUrls: ["./message-box.component.css"]
})
export class MessageBoxComponent implements OnChanges {

  constructor() {
  }

  @Input()
  name: string = "default name"
  visible: boolean = true
  count: number = 0

  hide(): void {
    this.visible = false
  }

  increment(): void {
    this.count++
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log("change some")
  }

}
