import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'data-source-backend-example',
    templateUrl: './data-source-backend-example.component.html',
    styleUrls: ['./data-source-backend-example.component.scss']
})
export class DataSourceBackendExampleComponent implements OnInit {

    selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';

    constructor(public dataService: DataService) {
    }

    ngOnInit() {
      //this.dataService.getCountries();
    }
    test2(t) {
        t.filter('11');
    }

band = true;
    test(t) {
      const value = t.searchTerm;
      
      console.log(t);
      console.log(t.searchTerm);
      console.log(t.searchInput.nativeElement.value);
      t.searchTerm = value.replace(/\D/g, "");
      t.searchInput.nativeElement.value = t.searchTerm;
      console.log(value.length);
      console.log(t.searchTerm.length);
      if (value.length !== t.searchTerm.length) {
        console.log('refill');
        t.filter(t.searchTerm);
      }
      console.log(t.searchTerm);
      console.log(t.searchInput.nativeElement.value);
      
      this.band = !this.band;
   
    }

    log(e) {
      console.log(e);
    }

    tucu() {
      console.log(document.getElementById("myAnchor"));
      document.getElementById("myAnchor").focus();
    }

}
