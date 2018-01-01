import { Component, OnInit } from '@angular/core';
import { Account  } from '../../../model/account';
import { AccountService } from '../../../service/account.service';


@Component({
  selector: 'app-xaccount',
  templateUrl: './xaccount.component.html',
  styleUrls: ['./xaccount.component.css']
})
export class XAccountComponent implements OnInit {

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
    console.log("getAccountList()")

    this.accountService.getAccountList()
        .subscribe(accounts => this.accountlist = accounts);
  }
}