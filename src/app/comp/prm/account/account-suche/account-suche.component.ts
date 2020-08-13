import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import * as myGlobals from '../../../../globals'; //<==== this one
import { Account } from '../../../../model/account';
import { AccountService } from '../../../../service/account.service';

@Component({
    selector: 'app-account-suche',
    templateUrl: './account-suche.component.html',
    styleUrls: ['./account-suche.component.css']
})
export class AccountSucheComponent implements OnInit {
    @Output() accountListOut = new EventEmitter<Account[]>();

    accountList: Account[];
    accountSel: Account;
    dbgLevel:number;

    formData = {
        ID: '100049012081112430100001',
    };

    constructor(private accountService: AccountService) { }

    ngOnInit() {
        console.log('ngOnInit()');
        this.dbgLevel=1;
        this.getAccountByGuid(this.formData.ID);
    }
    onSubmit() {
        console.log('onSubmit()');
        this.getAccountByGuid(this.formData.ID);
    }
    getAccountByGuid(guid): void {
        console.log('getAccountByGuid(' + guid + ')');
        this.accountService.getAccountByGuid(guid)
            .subscribe(x => this.emitAccountList(x));
    }
    getAccountList(): void {
        console.log('getAccountList()');
        this.accountService.getAccountList()
            .subscribe(x => this.emitAccountList(x));
    }

    emitAccountList(x): void {
        if (x) {
            if (!x.isArray)
                this.accountList = new Array<Account>(x);
            else
                this.accountList = x;
            this.accountListOut.emit(x);
        }
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        let sRet = 'app-account-suche';
        sRet = sRet + '\r\n accountList:'; if (this.accountList) { sRet = sRet + this.accountList.length; }

        return sRet + ', \r\n';
    }

}
