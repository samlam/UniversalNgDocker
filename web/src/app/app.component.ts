import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { IConfig } from '../models/Config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smartApp';
  name = 'Developers';
  features:string[] = null;

  constructor(private cfgSvc:ConfigService){}

  ngOnInit(){
    this.cfgSvc.get().subscribe((data:IConfig) => {
      this.features = data.features;
    });

  }

}
