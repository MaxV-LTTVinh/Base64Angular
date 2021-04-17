export class AppConfig
{
    constructor(apiUrl: string = null) {
      this.apiUrl = apiUrl;
    }
    apiUrl: string;
}