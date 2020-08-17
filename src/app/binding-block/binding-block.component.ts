import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-binding-block',
  templateUrl: './binding-block.component.html',
  styleUrls: ['./binding-block.component.css']
})
export class BindingBlockComponent implements OnInit {

  constructor() {
  }

  checked: boolean = false
  range: string
  handle(e:any) :void {
    console.log(e.target.value)
  }
  ngOnInit(): void {

  }

}
