import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from './ui/ui.module';
import { ContractComponent } from './contract/contract.component';
import { AgreementComponent } from './contract/agreement/agreement.component';
import { ConsentComponent } from './contract/consent/consent.component';
import { ConsentVerifyComponent } from './contract/consent/consent-verify/consent-verify.component';
import { ConsentService } from './contract/consent/consent.service';
import { DataStorageService } from './shared/data.storage.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractComponent,
    AgreementComponent,
    ConsentComponent,
    ConsentVerifyComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiModule
  ],
  providers: [ConsentService,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
