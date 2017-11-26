import { IEegPower } from '../model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eeg-data',
  templateUrl: './eeg-data.component.html',
  styleUrls: ['./eeg-data.component.css']
})
export class EegDataComponent implements OnInit {

  @Input() eegPower: IEegPower;

  constructor() { }

  ngOnInit() {
  }

}
