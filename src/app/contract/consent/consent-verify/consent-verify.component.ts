import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ConsentService } from '../consent.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-consent-verify',
  templateUrl: './consent-verify.component.html',
  styleUrls: ['./consent-verify.component.css']
})
export class ConsentVerifyComponent implements OnInit {
  
  consentVerifyForm: FormGroup;
  constructor(private consentService : ConsentService,
    private route : ActivatedRoute ,
    private router : Router) { }
    mobile_number : number = 0;
  ngOnInit() {
    this.intiForm();
    this.route.params.subscribe(
      (params:Params)=>{
       this.mobile_number = +params['mobile_number'];
       //this.recipe = this.recipesService.getRecipesById(this.id);
      }
   );
  }
  onSubmit() {
    
  }

  private intiForm() {
    let otp_code = '';
    //let verify = false;

    this.consentVerifyForm = new FormGroup({
      'otp_code': new FormControl(otp_code, Validators.required),
     
    });    
  }

}
