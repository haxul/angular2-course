import {Component, OnInit} from '@angular/core';
import {Phrase} from './Phrase';

const LIST: Phrase[] = [
  {text: 'привет мир', language: 'русский'},
  {text: 'hello world', language: 'english'},
];

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {

  constructor() {
  }

  phrases: Phrase[] = LIST;
  selectedLanguage: string;

  onSelect(phrase: Phrase): void {
    this.selectedLanguage = phrase.language;
  }
}
