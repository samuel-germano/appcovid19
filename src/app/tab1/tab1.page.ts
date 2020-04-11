import { ServiceService } from "./../service.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  slideOpts = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.6,
  };
  dados: any;
  cases: any;
  deaths: any;
  recovered: any;
  searchCountry: any;
  countries: any = null;
  constructor(private service: ServiceService) {
    this.getAll();
    this.getCountries();
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  getAll() {
    this.service.getAll().subscribe((data) => {
      this.dados = data;
      this.cases = this.dados.cases;
      this.deaths = this.dados.deaths;
      this.recovered = this.dados.recovered;
      console.log("meu data", this.dados);
    });
  }

  getCountries() {
    this.service.getCountry().subscribe((data) => {
      this.countries = data;
    });
  }
}
