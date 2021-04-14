import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from './base.service';
import { LambdaItem } from './lambdaItem.model';
import { Base64 } from './Base64.model';

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
    getEncodeBase64(functionName, requestItem): Observable<Base64> {
        const url = `${this.APIUrl}/Base64/Encode/${functionName}/${requestItem}`;
        return this.http.get<Base64>(url);
    }
    getDecodeBase64(base64): Observable<LambdaItem> {
        const url = `${this.APIUrl}/Base64/Decode/${base64}`;
        return this.http.get<LambdaItem>(url);
    }
    saveCoceBase64ToLocalStorage(base64) {
        const base64s = localStorage.getItem("base64s");

        localStorage.setItem("base64",base64s);
    }
}
