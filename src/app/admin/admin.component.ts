import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data.storage.service';
import { Consent } from '../contract/consent.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  consentsCollection: Consent[] = [];
  constructor(private dataStorageService :DataStorageService) { }

  ngOnInit() {
    this.getConsent();
  }

  getConsent() {
    this.dataStorageService.getConsent().subscribe(
      (collectionConsents: Consent[]) => {
          if(collectionConsents !== null){
            this.consentsCollection= collectionConsents;
          }else{
              console.log("Something went wrong");
          }
          
      }
  );
  }
}
