import {Component, OnInit, ViewChild, ViewChildren} from "@angular/core"
import {BlockComponent} from "../block/block.component"

@Component({
  selector: "app-block-host",
  templateUrl: "./block-host.component.html",
  styleUrls: ["./block-host.component.css"]
})
export class BlockHostComponent {

  @ViewChild(BlockComponent)
  blockChild: BlockComponent
  buttonTitle:string = "open"

  @ViewChildren(BlockComponent)
  blockList: BlockComponent[]


  showBlock():void {
    if (this.buttonTitle === "open") this.buttonTitle = "hide"
    else this.buttonTitle = "open"
    this.blockChild.show()
  }

  showAllBlock() {
    console.log(this.blockList)
    this.blockList.forEach(b => b.show())
  }


}
