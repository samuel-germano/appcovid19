import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  apiUrl: any = "https://coronavirus-19-api.herokuapp.com/";

  constructor(public http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.apiUrl}all`);
  }

  getCountry() {
    return this.http.get(`${this.apiUrl}countries`);
  }
}
