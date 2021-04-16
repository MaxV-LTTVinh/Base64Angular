import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from './base.service';
import { LambdaItem } from './lambdaItem.model';
import { Base64 } from './Base64.model';
import * as moment from 'moment';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'charset': 'UTF-8',
        'Access-Control-Allow-Origin': '*'
    })
}
@Injectable({
    providedIn: 'root'
})
export class SharedService extends BaseService {
    private _sharedHeaders = new HttpHeaders();
    constructor(private http: HttpClient) {
        super();
        this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');
    }

    readonly APIUrl = "http://localhost/Api";

    getDepList(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/WeatherForecast');
    }
    getEncodeBase64(functionName: string, requestItem: string): Observable<Base64> {
        const url = `${this.APIUrl}/Base64/Encode/${functionName}/${requestItem}`;
        return this.http.get<Base64>(url);
    }
    getDecodeBase64(base64: string): Observable<LambdaItem> {
        const url = `${this.APIUrl}/Base64/Decode/${base64}`;
        return this.http.get<LambdaItem>(url);
    }
    saveCodeBase64ToLocalStorage(base64Code: string, base64LocalStorage: Base64[]) {
        if (base64LocalStorage.find(x => x.base64 == base64Code) == null) {
            var base64 = new Base64(base64Code, moment().toDate())
            console.log(base64);

            base64LocalStorage.push(base64);
            localStorage.setItem("base64s", JSON.stringify(base64LocalStorage));
        }
    }
    reloadBase64LocalStorage(): Base64[] {
        var base64Json = localStorage.getItem("base64s");
        var base64s: Base64[];
        if (base64Json != null) {
            base64s = JSON.parse(base64Json).sort((f: Base64, s: Base64) => {
                return <any>new Date(s.dateTime) - <any>new Date(f.dateTime);
            });
            return base64s;
        }
        return []
    }
}
