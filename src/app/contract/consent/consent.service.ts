import { Injectable } from '@angular/core';
import { Consent } from '../consent.model';
import { DataStorageService } from 'src/app/shared/data.storage.service';

@Injectable()
export class ConsentService {
    
    constructor(private dataStorageService: DataStorageService){}

    setConsent(consent  :Consent){

    }

    // setConsentConfirmation(consent : Consent){        
    //   return  this.dataStorageService.storeCollectionPoints(consent).subscribe(
    //     (response: Response) => {
    //       console.log(response);
    //     }
    //   );
    // }
}