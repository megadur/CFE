import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent }  from './comp/_alt/account/account.component';
import { AccountDetailComponent  }  from './comp/_alt/account-detail/account-detail.component';
import { AuftragComponent }  from './comp/prm/auftrag/auftrag.component';
import { AuswertungComponent } from './comp/adm/auswertung/auswertung.component';
import { BestandComponent }  from './comp/_alt/bestand/bestand.component';
import { BestandDetailComponent }  from './comp/_alt/bestand-detail/bestand-detail.component';
import { DashboardComponent }  from './comp/all/dashboard/dashboard.component';
import { KampagneComponent } from './comp/wrt/kampagne/kampagne.component';
import { KatalogComponent } from './comp/adm/katalog/katalog.component';
import { KonfigurationComponent } from './comp/adm/konfiguration/konfiguration.component';
import { LoginComponent } from './comp/all/login/login.component';
import { NutzermgmtComponent } from './comp/wrt/nutzermgmt/nutzermgmt.component';
import { ProduktComponent } from './comp/prm/produkt/produkt.component';
import { SnEinzelComponent } from './comp/wrt/sn-einzel/sn-einzel.component';
import { SnListeComponent } from './comp/wrt/sn-liste/sn-liste.component';
import { XAccountComponent }  from './comp/prm/xaccount/xaccount.component';
import { XAuftragComponent }  from './comp/prm/xauftrag/xauftrag.component';
import { XBestandComponent }  from './comp/prm/xbestand/xbestand.component';
import { XErrorComponent }  from './comp/prm/xerror/xerror.component';

const routes: Routes = [
  { path: 'xaccount', component: XAccountComponent },
  { path: 'account-detail/:id', component: AccountDetailComponent },
  { path: 'auswertung', component: AuswertungComponent },
  { path: 'auftrag', component: AuftragComponent },
  { path: 'bestand', component: BestandComponent },
  { path: 'bestand-detail/:id', component: BestandDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'katalog', component: KatalogComponent },
  { path: 'kampagne', component: KampagneComponent },
  { path: 'konfiguration', component: KonfigurationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nutzermgmt', component: NutzermgmtComponent },
  { path: 'produkt', component: ProduktComponent },
  { path: 'sneinzel', component: SnEinzelComponent },
  { path: 'snliste', component: SnListeComponent },
  { path: 'xauftrag', component: XAuftragComponent },
  { path: 'xbestand', component: XBestandComponent },
  { path: 'xerror', component: XErrorComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
