import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  inputValue : number;

  setInput(num : number) {
    this.inputValue = num
  }

  getInput():number {
    return this.inputValue
  }
}
