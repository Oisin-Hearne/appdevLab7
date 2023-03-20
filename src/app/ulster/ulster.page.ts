import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ulster',
  templateUrl: './ulster.page.html',
  styleUrls: ['./ulster.page.scss'],
})
export class UlsterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counties: string[] = ["Derry", "Antrim", "Down", "Tyrone", "Armagh", "Fermanagh", "Cavan", "Monaghan", "Donegal"];
}
