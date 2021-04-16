import { Time } from "@angular/common";

export class Base64
{
    constructor(base64: string, dateTime : Date) {
      this.base64 = base64;
      this.dateTime = dateTime;
    }
    base64: string;
    dateTime: Date;
}