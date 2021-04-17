import { Component, OnInit } from '@angular/core';
import { Base64 } from '../model/Base64.model';
import { SharedService } from '../shared.service';
import * as moment from 'moment';

@Component({
    selector: 'app-decode-base64',
    templateUrl: './decode-base64.component.html',
    styleUrls: ['./decode-base64.component.css']
})
export class DecodeBase64Component implements OnInit {

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
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
    }

    decodeClick(): void {

        if (this.Base64 == "") {
            this.sharedService.Notify("error", "Not be empty");
            return;
        }

        this.sharedService.getDecodeBase64(this.Base64).subscribe(data => {
            console.log(data);
            this.FunctionName = data.functionName;
            this.RequestItem = data.requestItem;
        });

        this.sharedService.saveCodeBase64ToLocalStorage(this.Base64, this.Base64LocalStorage);
        this.Base64LocalStorage = this.sharedService.reloadBase64LocalStorage();
    }
    moment(dateTime, format): string {
        return moment(dateTime).format(format);
    }
}
