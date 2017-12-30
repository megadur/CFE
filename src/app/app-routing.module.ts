import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }  from './comp/dashboard/dashboard.component';
import { BestandComponent }  from './comp/bestand/bestand.component';
import { XBestandComponent }  from './comp/xbestand/xbestand.component';
import { XAuftragComponent }  from './comp/xauftrag/xauftrag.component';
import { BestandDetailComponent }  from './comp/bestand-detail/bestand-detail.component';
import { AccountComponent }  from './comp/account/account.component';
import { AccountDetailComponent  }  from './comp/account-detail/account-detail.component';
import { SnEinzelComponent } from './comp/sn-einzel/sn-einzel.component';
import { SnListeComponent } from './comp/sn-liste/sn-liste.component';
import { AuswertungComponent } from './comp/auswertung/auswertung.component';
import { KonfigurationComponent } from './comp/konfiguration/konfiguration.component';
import { KampagneComponent } from './comp/kampagne/kampagne.component';
import { NutzermgmtComponent } from './comp/nutzermgmt/nutzermgmt.component';
import { LoginComponent } from './comp/login/login.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bestand', component: BestandComponent },
  { path: 'xbestand', component: XBestandComponent },
  { path: 'xauftrag', component: XAuftragComponent },
  { path: 'bestand-detail/:id', component: BestandDetailComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account-detail/:id', component: AccountDetailComponent },
  { path: 'sneinzel', component: SnEinzelComponent },
  { path: 'snliste', component: SnListeComponent },
  { path: 'auswertung', component: AuswertungComponent },
  { path: 'konfiguration', component: KonfigurationComponent },
  { path: 'kampagne', component: KampagneComponent },
  { path: 'nutzermgmt', component: NutzermgmtComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
