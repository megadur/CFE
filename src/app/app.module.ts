import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountComponent } from './comp/_alt/account/account.component';
import { BestandComponent } from './comp/_alt/bestand/bestand.component';
import { ProduktComponent } from './comp/all/produkt/produkt.component';
import { NavComponent } from './comp/all/nav/nav.component';
import { DashboardComponent } from './comp/all/dashboard/dashboard.component';
import { AccountDetailComponent } from './comp/_alt/account-detail/account-detail.component';
import { BestandDetailComponent } from './comp/_alt/bestand-detail/bestand-detail.component';

import { AccountService } from './service/account.service';
import { XBestandService } from './service/xbestand.service';
import { XAuftragService } from './service/xauftrag.service';

import { MessagesComponent } from './comp/all/messages/messages.component';
import { MessageService } from './service/message.service';
import { SnEinzelComponent } from './comp/wrt/sn-einzel/sn-einzel.component';
import { SnListeComponent } from './comp/wrt/sn-liste/sn-liste.component';
import { AuswertungComponent } from './comp/adm/auswertung/auswertung.component';
import { KonfigurationComponent } from './comp/adm/konfiguration/konfiguration.component';
import { KampagneComponent } from './comp/wrt/kampagne/kampagne.component';
import { NutzermgmtComponent } from './comp/wrt/nutzermgmt/nutzermgmt.component';
import { LoginComponent } from './comp/all/login/login.component';
import { XBestandComponent } from './comp/prm/xbestand/xbestand.component';
import { XAuftragComponent } from './comp/prm/xauftrag/xauftrag.component';
import { XauftragDetailComponent } from './comp/prm/xauftrag-detail/xauftrag-detail.component';
import { XauftragExtDetailComponent } from './comp/prm/xauftrag-ext-detail/xauftrag-ext-detail.component';
import { XauftragHisDetailComponent } from './comp/prm/xauftrag-his-detail/xauftrag-his-detail.component';
import { XerrorDetailComponent } from './comp/prm/xerror-detail/xerror-detail.component';
import { XmessageDetailComponent } from './comp/prm/xmessage-detail/xmessage-detail.component';
import { KatalogComponent } from './comp/adm/katalog/katalog.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    BestandComponent,
    ProduktComponent,
    NavComponent,
    DashboardComponent,
    AccountDetailComponent,
    BestandDetailComponent,
    MessagesComponent,
    SnEinzelComponent,
    SnListeComponent,
    AuswertungComponent,
    KonfigurationComponent,
    KampagneComponent,
    NutzermgmtComponent,
    LoginComponent,
    XBestandComponent,
    XAuftragComponent,
    XauftragDetailComponent,
    XauftragExtDetailComponent,
    XauftragHisDetailComponent,
    XerrorDetailComponent,
    XmessageDetailComponent,
    KatalogComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
    AppRoutingModule
  ],
  providers: [AccountService, MessageService, XBestandService, XAuftragService],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
ng serve
*/