import { OnInit, Component, Input, SimpleChanges, NgZone } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Account } from '../../model/account';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  @Input() account: Account;
  acc: Observable<Account>;
  inp: string;
  counter = 0;
  constructor(private accountService: AccountService, private zone: NgZone) { }

  ngOnInit() {
    this.getEmList();
    this.inp = "100049016041212390100001";
  }
  getEmList(): void {
    //console.log("AccountDetailComponent: getEmList()")
    if (this.account)
      this.accountService.getEmList(this.account.GUID)
        .subscribe(ems => this.account.emlist = ems);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.account.currentValue);// current selected value
    console.log(changes.account.previousValue);// previous selected value
    this.getEmList();
  }
  getAccount(): void {
    console.log("ADC: getAccount() in " + this.inp); 
    if (this.inp)
      this.accountService
      .getAccount(this.inp)
      .subscribe((a) => {
        console.log("ADC: getAccount() state a " + a.GUID);
        this.account=a[0];
        console.log("ADC: getAccount() state " + this.account.GUID);
        this.counter++; // application state changed
      })
      //      .subscribe(a => this.account = a);
    console.log("ADC: getAccount() out " + this.account.GUID);
  }
  redraw(): void {
    this.zone.run(() => this.account);
    this.zone.run(() => {
      console.log('enabled time travel '+ this.account.GUID);
    });

  }
  

}
