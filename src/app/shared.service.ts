import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from './base.service';
import { Base64 } from './model/Base64.model';
import * as moment from 'moment';
import { AppConfig } from './model/AppConfig.model';
import { AppConfigService } from './services/app-config.service';
import { ToastrService } from 'ngx-toastr';
import { LambdaItem } from './model/LambdaItem.model';

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
    private _apiUrl: string = "";
    constructor(private http: HttpClient, private appConfigService: AppConfigService, private toastr: ToastrService) {
        super();
        this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json'); 4
        this._apiUrl = appConfigService.apiUrl

    }

    public Notify(status: string, message: string) {
        switch (status) {
            case "success":
                this.toastr.success(message);
                break;
            case "error":
                this.toastr.error(message);
                break;
            case "info":
                this.toastr.info(message);
                break;
            case "warning":
                this.toastr.warning(message);
                break;
            default:
                this.toastr.success(message);
                break;
        }
    }

    getDepList(): Observable<any[]> {
        return this.http.get<any>(this._apiUrl + '/WeatherForecast');
    }
    getEncodeBase64(functionName: string, requestItem: string): Observable<Base64> {
        const url = `${this._apiUrl}/Base64/Encode/${functionName}/${requestItem}`;
        return this.http.get<Base64>(url);
    }
    getDecodeBase64(base64: string): Observable<LambdaItem> {
        const url = `${this._apiUrl}/Base64/Decode/${base64}`;
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
