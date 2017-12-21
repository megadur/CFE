import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }  from './comp/dashboard/dashboard.component';
import { BestandComponent }  from './comp/bestand/bestand.component';
import { BestandDetailComponent }  from './comp/bestand-detail/bestand-detail.component';
import { AccountComponent }  from './comp/account/account.component';
import { AccountDetailComponent  }  from './comp/account-detail/account-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bestand', component: BestandComponent },
  { path: 'bestand-detail/:id', component: BestandDetailComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account-detail/:id', component: AccountDetailComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
