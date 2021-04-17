import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../model/AppConfig.model';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService extends AppConfig {
    constructor(private http: HttpClient) {
        super();
    }

    // This function needs to return a promise
    load() {
        return this.http.get<AppConfig>('app.config.json')
            .toPromise()
            .then(data => {
                this.apiUrl = data.apiUrl;
            })
            .catch((ex) => {
                console.error(ex);
                console.error('Could not load configuration');
            });
    }
}
