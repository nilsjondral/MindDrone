import { Injectable, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IBrainData } from '../model';

@Injectable()
export class BrainSocketService {

  private socket;

  paused = false;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  start() {
    this.socket.emit('start');
  }

  pause() {
    this.socket.emit('pause');
    this.paused = !this.paused;
  }

  getBrainData(): Observable<IBrainData> {
    const observable = Observable.create(observer => {
      this.socket.on('data', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
  }
}
