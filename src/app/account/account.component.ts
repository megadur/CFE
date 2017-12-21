import { Component, OnInit } from '@angular/core';
import { Account  } from '../model/account';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  accountlist: Account[];

  selectedAccount: Account;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getAccountList();
  }
  onSelect(account: Account): void {
    this.selectedAccount = account;
  }
  getAccountList(): void {
    this.accountService.getAccountList()
        .subscribe(accounts => this.accountlist = accounts);
  }
}
