import { Component, OnInit } from '@angular/core';
import { Base64 } from '../model/Base64.model';
import { SharedService } from '../shared.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-encode-base64',
    templateUrl: './encode-base64.component.html',
    styleUrls: ['./encode-base64.component.css']
})
export class EncodeBase64Component implements OnInit {

    constructor(private sharedService: SharedService) { }

    FunctionName: string = "";
    RequestItem: string = "";
    Base64: string = "";
    Base64LocalStorage: Base64[] = [];

    ngOnInit(): void {
        this.Base64LocalStorage = this.sharedService.reloadBase64LocalStorage();
    }

    copyInputMessage(inputElement: any) {
        inputElement.select();
        document.execCommand('copy'); +
            inputElement.setSelectionRange(0, 0);
        this.sharedService.Notify("success", "Copy success");
    }

    encodeClick(): void {
        if (this.FunctionName == "" || this.RequestItem == "") {
            this.sharedService.Notify("error", "Not be empty");
            return;
        }
        this.sharedService.getEncodeBase64(this.FunctionName, this.RequestItem).toPromise().then(data => {
            console.log(data.dateTime);
            this.Base64 = data.base64;
            this.sharedService.saveCodeBase64ToLocalStorage(this.Base64, this.Base64LocalStorage);
            this.Base64LocalStorage = this.sharedService.reloadBase64LocalStorage();
            this.sharedService.Notify("success", "Encode success");
        }).catch(ex => {
            this.sharedService.Notify("error", "Errors");
        }).finally(() => {

        });
        console.log(this.FunctionName);
        console.log(this.RequestItem);
        console.log(this.Base64);
    }

    moment(dateTime, format): string {
        return moment(dateTime).format(format);
    }
}
