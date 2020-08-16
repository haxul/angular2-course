import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-host',
  templateUrl: './message-host.component.html',
  styleUrls: ['./message-host.component.css']
})
export class MessageHostComponent implements OnInit {

  constructor() { }
  name: string = "default name"
  inputValue : string
  changeName(text: string): void {
    this.name = text
  }
  ngOnInit(): void {
  }

}
