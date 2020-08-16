import { Component } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent  {

  visible: boolean = false
  show():void {
    if (this.visible) this.visible = false
    else this.visible = true
  }

}
