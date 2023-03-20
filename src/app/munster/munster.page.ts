import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-munster',
  templateUrl: './munster.page.html',
  styleUrls: ['./munster.page.scss'],
})
export class MunsterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counties: string[] = ["Clare", "Cork", "Tipperary", "Waterford", "Limerick", "Kerry"];

}
