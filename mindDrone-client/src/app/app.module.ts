import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrainSocketService } from './services/brain-socket.service';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent
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
