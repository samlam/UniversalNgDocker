import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //BrowserModule
    BrowserModule.withServerTransition({ appId: 'ng-container' }),
    HttpClientModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
