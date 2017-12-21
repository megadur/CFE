import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

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
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './service/message.service';

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
    MessagesComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
    AppRoutingModule
  ],
  providers: [AccountService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
