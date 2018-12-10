import { AdminComponent } from './admin/admin.component';
import { ConsentVerifyComponent } from './contract/consent/consent-verify/consent-verify.component';
import { ConsentComponent } from './contract/consent/consent.component';
import { ContractComponent } from './contract/contract.component';
import { AgreementComponent } from './contract/agreement/agreement.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/contract/consent', pathMatch: 'full' },
  {
    path: 'contract', component: ContractComponent, children: [
      { path: 'consent', component: ConsentComponent },
      { path: ':mobile_number/consent-verify', component: ConsentVerifyComponent },
    ]
  },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
