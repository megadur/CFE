import { OnInit, Component, Input, SimpleChanges } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Account } from '../../../model/account';
import { AccountService } from '../../../service/account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  @Input() account: Account;
  inp: string;
  counter = 0;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getEmList();
    this.inp = "100049016041212390100001";
  }
  getEmList(): void {
    //console.log("AccountDetailComponent: getEmList()")
    if (this.account)
      this.accountService.getEmList(this.account.GUID)
        .subscribe(ems => this.account.emlist = ems);
  };
  getParList(): void {
    //console.log("AccountDetailComponent: getEmList()")
    if (this.account)
      this.accountService.getParList(this.account.GUID)
        .subscribe(x => this.account.parlist = x);
  };
  getSprList(): void {
    //console.log("AccountDetailComponent: getEmList()")
    if (this.account)
      this.accountService.getSprList(this.account.GUID)
        .subscribe(x => this.account.sprlist = x);
  };
  getRnrList(): void {
    //console.log("AccountDetailComponent: getEmList()")
    if (this.account)
      this.accountService.getRnrList(this.account.GUID)
        .subscribe(x => this.account.rnrlist = x);
  };
  getInsList(): void {
    //console.log("AccountDetailComponent: getEmList()")
    if (this.account)
      this.accountService.getInsList(this.account.GUID)
        .subscribe(x => this.account.inslist = x);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.account.currentValue);// current selected value
    console.log(changes.account.previousValue);// previous selected value
    this.getEmList();
    this.getParList();
    this.getRnrList();
    this.getSprList();
    this.getInsList();

  }
  getAccount(): void {
    console.log("ADC: getAccount() in " + this.inp);
    if (this.inp)
      this.accountService
        .getAccount(this.inp)
        .subscribe((a) => {
          this.account = a[0];
          this.counter++; // application state changed
        })
    //      .subscribe(a => this.account = a);
  }

}
