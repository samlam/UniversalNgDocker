import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
import { ErrorsHandler } from '../services/err-handler.service';

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
    ConfigService,
    {provide: ErrorHandler, useClass: ErrorsHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
