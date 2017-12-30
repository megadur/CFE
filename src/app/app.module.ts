import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountComponent } from './comp/account/account.component';
import { BestandComponent } from './comp/bestand/bestand.component';
import { ProduktComponent } from './comp/produkt/produkt.component';
import { NavComponent } from './comp/nav/nav.component';
import { DashboardComponent } from './comp/dashboard/dashboard.component';
import { AccountDetailComponent } from './comp/account-detail/account-detail.component';
import { BestandDetailComponent } from './comp/bestand-detail/bestand-detail.component';

import { AccountService } from './service/account.service';
import { MessagesComponent } from './comp/messages/messages.component';
import { MessageService } from './service/message.service';
import { SnEinzelComponent } from './comp/sn-einzel/sn-einzel.component';
import { SnListeComponent } from './comp/sn-liste/sn-liste.component';
import { AuswertungComponent } from './comp/auswertung/auswertung.component';
import { KonfigurationComponent } from './comp/konfiguration/konfiguration.component';
import { KampagneComponent } from './comp/kampagne/kampagne.component';
import { NutzermgmtComponent } from './comp/nutzermgmt/nutzermgmt.component';
import { LoginComponent } from './comp/login/login.component';
import { XbestandComponent } from './comp/xbestand/xbestand.component';

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
    XbestandComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
    AppRoutingModule
  ],
  providers: [AccountService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
ng serve
*/