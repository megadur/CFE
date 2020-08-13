import { Component, OnInit } from '@angular/core';

import { Account } from '../../../model/account';
import { XBestand } from '../../../model/x-bestand';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
    accountList: Account[];
    account: Account;
    xbestand: XBestand
    constructor() { }
    dbgLevel:number;
    ngOnInit() {
        this.dbgLevel=0;
    }

    hasAccount(x: Account) {
        console.log('AccountComponent:  hasAccount()');
        this.account = x;
    }
    hasAccountList(xl: Account[]) {
        console.log('AccountComponent:  hasAccountList()');
        this.accountList = xl;
    }
    hasXBestand(x: XBestand){
        console.log('AccountComponent:  hasXBestand()');
        this.xbestand = x;
    }
    // TODO: Remove this when we're done
    get diagnostic() {
        let sRet = 'app-account';

        if (this.accountList) { sRet = sRet + 'accountList:' + this.accountList.length + ' \r\n'; } else { sRet = sRet + 'accountList:  \r\n'; }
        if (this.account) { sRet = sRet + 'account:' + this.account.GUID + ' \r\n'; } else { sRet = sRet + 'account:  \r\n'; }
        if (this.xbestand) { sRet = sRet + 'xbestand:' + this.xbestand.id + ' \r\n'; } else { sRet = sRet + 'xbestand:  \r\n'; }

        return sRet + ', \r\n';
    }

}
