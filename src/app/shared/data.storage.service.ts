import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consent } from '../contract/consent.model';
import { map } from 'rxjs/operators';
@Injectable()
export class DataStorageService {

    private firebaseBaseUrl : string = '[firbase_database_base_url]';

    constructor(private http: HttpClient) { }


    storeConsent(consent: Consent) {
        //const token = this.authService.getToken();
        return this.http.put(this.firebaseBaseUrl + 'consent/' + consent.mobile_number + '.json', consent);
    }

    getConsent() {
        return this.http.get(this.firebaseBaseUrl + 'consent.json')
            .pipe(map((response: Consent[]) => {
                const collectionConsent: Consent[] = [];
                if (response !== null) {
                    for (var key in response) {
                        console.log("Key: " + key);
                        collectionConsent.push(response[key]);
                    }
                } else {
                    console.log("Something went wrong");
                }
                return collectionConsent;
            }));
    }
}