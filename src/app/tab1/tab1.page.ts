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
    slidesPerView: 1.4,
  };
  cases: any;
  deaths: any;
  searchCountry: any;
  countries: any = null;
  brazil: any = null;
  lastupdate: any;
  estados: any;
  deathsEstados: any;
  constructor(private service: ServiceService) {
    this.getEstados();
    this.getBrazil();
    // this.getAll();
    // this.getCountries();
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  // getAll() {
  //   this.service.getAll().subscribe((data) => {
  //     this.dados = data;
  //     this.cases = this.dados.cases;
  //     this.deaths = this.dados.deaths;
  //     this.recovered = this.dados.recovered;
  //     console.log("meu data", this.dados);
  //   });
  // }

  // getCountries() {
  //   this.service.getCountry().subscribe((data) => {
  //     this.countries = data;
  //     console.log("this.coutries", this.countries);
  //   });
  // }

  getEstados() {
    this.service.getEstados().subscribe((data) => {
      this.estados = data;
      this.countries = this.estados.infectedByRegion;
      // this.countries = this.estados.deceasedByRegion;
      console.log("this.estados", this.estados.deceasedByRegion);
      console.log("this.coutries", this.countries);
    });
  }

  getBrazil() {
    this.service.getBrazil().subscribe((data) => {
      this.brazil = data;

      for (let b of this.brazil) {
        if (b.country == "Brazil") {
          this.lastupdate = b.lastUpdatedApify;
          this.cases = b.infected;
          this.deaths = b.deceased;
          console.log("meu b", b);
        }
      }
      // console.log("this.brazil", this.brazil);
      // console.log("this.brazil", this.brazil);
    });
  }
}
