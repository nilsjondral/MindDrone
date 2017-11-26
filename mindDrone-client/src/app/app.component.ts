import { IBrainData } from './model';
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

  title = 'MindDrone 1.O';

  isPaused = false;

  constructor(private service: BrainSocketService) {
  }

  start($event: Event) {
    console.log('start');
    this.service.start();

    this.subscriptions.push(this.service.getBrainData().subscribe((data: IBrainData) => {
      console.log('data', data);
      this.isPaused = this.service.paused;
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
