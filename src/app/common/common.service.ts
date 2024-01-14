import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }

  public getData(url: any) {
    return this._http.get(url);
  }
}
