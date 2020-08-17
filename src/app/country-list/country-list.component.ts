import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor(private router: Router) {
    this.list = ['Some', 'thing'];
  }

  list: string[];

  go(): void {
    this.router.navigate(["block-host"])
  }

  ngOnInit(): void {
  }

}
