import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

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

    ngOnInit(): void {
    }
    decodeClick():void{
        
        this.sharedService.getDecodeBase64(this.Base64).subscribe(data=>{
            console.log(data);
            this.FunctionName = data.functionName;
            this.RequestItem = data.requestItem;
          });
    }
}
