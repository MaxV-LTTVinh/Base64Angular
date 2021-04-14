import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-encode-base64',
  templateUrl: './encode-base64.component.html',
  styleUrls: ['./encode-base64.component.css']
})
export class EncodeBase64Component  implements OnInit {

    constructor(private sharedService: SharedService) { }

    FunctionName: string = "";
    RequestItem: string = "";
    Base64: string = "";

  ngOnInit(): void {
  }

  encodeClick() :void{
    this.sharedService.getEncodeBase64(this.FunctionName, this.RequestItem).subscribe(data=>{
        console.log(data.base64);
        this.Base64 = data.base64;
      });
    console.log(this.FunctionName);
    console.log(this.RequestItem);
    console.log(this.Base64);
}
}
