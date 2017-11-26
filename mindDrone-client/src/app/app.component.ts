import { IBrainData, IEegPower, IESense } from './model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrainSocketService } from './services/brain-socket.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  private subscriptions: Array<Subscription> = [];

  title = 'MindDrone';

  isPaused = false;
  isConnected = false;
  poorSignalLevel = 0;

  eegData: IEegPower = null;
  eSenseData: IESense = null;

  constructor(private service: BrainSocketService) {
    this.subscriptions.push(service.connection.subscribe((value) => {
      this.isConnected = value;
      this.eegData = null;
      this.eSenseData = null;
    }));
  }

  start($event: Event) {
    console.log('start');
    this.service.start();

    this.subscriptions.push(this.service.getBrainData().subscribe((data: IBrainData) => {
      console.log('data', data);
      this.eegData = data.eegPower;
      this.eSenseData = data.eSense;
      this.isPaused = this.service.paused;
      this.poorSignalLevel = data.poorSignalLevel;
    }));
  }

  pause($event: Event) {
    console.log('pause');
    this.service.pause();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
