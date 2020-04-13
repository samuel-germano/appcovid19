import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  apiUrl: any = "https://coronavirus-19-api.herokuapp.com/";
  api2Url: any = "https://api.apify.com/v2/key-value-stores/";

  constructor(public http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.apiUrl}all`);
  }

  getCountry() {
    return this.http.get(`${this.apiUrl}countries`);
  }

  getBrazil() {
    return this.http.get(
      `${this.api2Url}tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true`
    );
  }

  getEstados() {
    return this.http.get(
      `${this.api2Url}TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true`
    );
  }
}
