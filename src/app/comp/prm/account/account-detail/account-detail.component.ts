import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Account } from '../../../../model/account';

@Component({
    selector: 'app-account-detail',
    templateUrl: './account-detail.component.html',
    styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
    private _accountListIn: Account[];
    @Output() accountOut = new EventEmitter<Account>();
    accountSel: Account;

    constructor() { }
    dbgLevel: number;
    ngOnInit() {
        this.dbgLevel = 0;
        this.accountSel = new Account();
    }
    getStyle(s) {
        if (s == "deaktiviert")
            return { 'color': 'red' };
        if (s == "aktiviert")
            return { 'color': 'blue' };
        if (s == "bestellt")
            return { 'color': 'green' };
    }

    @Input() set accountListIn(x: Account[]) {
        this._accountListIn = x;
        if(this._accountListIn) {
            this.accountSel=this._accountListIn[0];
            this.accountOut.emit(this.accountSel);
        }
    }
    get accountListIn() {
        return this._accountListIn;
    }

    onSelect(account: Account): void {
        this.accountSel = account;
        this.accountOut.emit(this.accountSel);

    }
    setNewGUID(guid: String) {
        this.accountSel = this.accountListIn.filter(
            a => a.GUID == guid)[0];
        // console.log('AccountDetailComponent:  setNewGUID()'+guid );
        this.accountOut.emit(this.accountSel);
    }
    // TODO: Remove this when we're done
    get diagnostic() {
        let sRet = 'app-account-detail';
        sRet = sRet + '\r\n accountListIn:'; if (this.accountListIn) { sRet = sRet + this.accountListIn.length; }
        sRet = sRet + '\r\n accountSel:'; if (this.accountSel) { sRet = sRet + this.accountSel.GUID; }

        return sRet + ', \r\n';
    }


}
