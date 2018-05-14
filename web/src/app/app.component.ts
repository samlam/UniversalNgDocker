import { Component, VERSION } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { Config } from '../models/Config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smartApp';
  name = 'Developers';
  angularVersion = VERSION.full;
  features:string[] = null;

  constructor(private cfgSvc:ConfigService){}

  ngOnInit(){
    this.cfgSvc.get().subscribe((data:Config) => {
      this.features = data.features;
    });

  }
}
