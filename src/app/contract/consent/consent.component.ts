import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConsentService } from './consent.service';
import { DataStorageService } from 'src/app/shared/data.storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {

  consentForm: FormGroup;
  constructor(private consentService : ConsentService,
    private dataStorageService: DataStorageService,
    private router: Router, 
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.intiForm();
  }

  onSubmit() {
    //this.consentService.setConsent(this.consentForm.value)   
    this.dataStorageService.storeConsent(this.consentForm.value).subscribe(
      (response: Response) => {
        console.log(response);
        //this.router.navigate(['../',,'consent-verify'], { relativeTo: this.route })
        this.router.navigate(['../',this.consentForm.value['mobile_number'],'consent-verify'],{relativeTo: this.route})
      }
    ); 
  }

  private intiForm() {
    let name = '';
    let company_name = '';
    let email = '';
    let address = '';
    let mobile_number = '';
    let consent = false;
    let verify = false;

    this.consentForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'company_name': new FormControl(company_name, Validators.required),
      'email': new FormControl(email, Validators.required),
      'address': new FormControl(address, Validators.required),
      'mobile_number': new FormControl(mobile_number, Validators.required),      
      'consent': new FormControl(consent, Validators.required),      
      'verify': new FormControl(verify, Validators.required),      
    });    
  }

}
