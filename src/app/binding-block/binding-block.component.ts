import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-binding-block',
  templateUrl: './binding-block.component.html',
  styleUrls: ['./binding-block.component.css']
})
export class BindingBlockComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  checked: boolean = false
  range: number

  handle(): void {
    this.dataService.setInput(this.range)
  }

  ngOnInit(): void {

  }

}
