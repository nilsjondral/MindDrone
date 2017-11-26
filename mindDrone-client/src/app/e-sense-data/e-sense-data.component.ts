import { Component, Input, OnInit } from '@angular/core';
import { IESense } from '../model';

@Component({
  selector: 'app-e-sense-data',
  templateUrl: './e-sense-data.component.html',
  styleUrls: ['./e-sense-data.component.css']
})
export class ESenseDataComponent implements OnInit {

  @Input() eSense: IESense;

  constructor() { }

  ngOnInit() {
  }

}
