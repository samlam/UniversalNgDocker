import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  appBaseUrl = '/web';
  configUrl = this.appBaseUrl + '/assets/config.json';

  constructor(private http: HttpClient) { }

  get(){
      return this.http.get(this.configUrl);
  }
}