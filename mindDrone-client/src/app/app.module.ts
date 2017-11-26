import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrainSocketService } from './services/brain-socket.service';
import { StatusComponent } from './status/status.component';
import { EegDataComponent } from './eeg-data/eeg-data.component';
import { ESenseDataComponent } from './e-sense-data/e-sense-data.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    EegDataComponent,
    ESenseDataComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    BrainSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
