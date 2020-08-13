import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import * as myGlobals from '../../../../globals'; //<==== this one
import { Account } from '../../../../model/account';
import { XBestand } from '../../../../model/x-bestand';
import { XBestandService } from '../../../../service/xbestand.service';

@Component({
    selector: 'app-bestand-detail',
    templateUrl: './bestand-detail.component.html',
    styleUrls: ['./bestand-detail.component.css']
})
export class BestandDetailComponent implements OnInit {
    private _account: Account;
    xbestandList: XBestand[];
    @Output() xbestandOut = new EventEmitter<XBestand[]>();
    xbestand: XBestand;
    dbgLevel: number = 1;
    constructor(private bService: XBestandService) { }

    ngOnInit() {
        this.dbgLevel = myGlobals.dbgLevel;
        this.xbestand=new XBestand();
        this._account=new  Account();
        this.xbestandList=new Array<XBestand>() ;
    }
    @Input() set accountIn(x: Account) {
        this._account = x;
        if (this._account) {
            this.getBestandByGuid(this._account.GUID);
        }
    }
    get accountIn() {
        return this._account;
    }

    setXBestandList(x): void {
        this.xbestandList = x;
        if (this.xbestandList){
            this.xbestand = this.xbestandList.filter(
            x => x.stock.STATUS === 'aktiviert')[0];
            this.emitXBestand(this.xbestand)
        }
     }
    emitXBestand(x): void {
        this.xbestandOut.emit(x);
    }
    getEMList() {
        if (this.xbestand)
            return this.xbestand.em;
    }
    getPARList() {
        if (this.xbestand)
            return this.xbestand.par;
    }
    getSPRList() {
        if (this.xbestand)
            return this.xbestand.spr;
    }
    getRNRList() {
        if (this.xbestand)
            return this.xbestand.rnr;
    }
    getBestandByGuid(guid: string) {
        this.bService
            .getXBestandList_ByParam(guid, '', '', '')
            .subscribe(x => this.setXBestandList(x));

    }
    // TODO: Remove this when we're done
    get diagnostic() {
        let sRet = 'app-bestand-detail';
        sRet = sRet + '\r\n xbestandList:'; if (this.xbestandList) { sRet = sRet + this.xbestandList.length; }
        sRet = sRet + '\r\n xbestand:'; if (this.xbestand) { sRet = sRet + this.xbestand.id; }
        sRet = sRet + '\r\n account:'; if (this._account) { sRet = sRet + this._account.GUID; }

        return sRet + ', \r\n';
    }

}
