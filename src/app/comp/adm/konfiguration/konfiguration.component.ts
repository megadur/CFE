import { Component, OnInit } from '@angular/core';

import * as myGlobals from '../../../globals'; //<==== this one
import { ConfigurationService } from '../../../service/configuration.service';

@Component({
    selector: 'app-konfiguration',
    templateUrl: './konfiguration.component.html',
    styleUrls: ['./konfiguration.component.css']
})
export class KonfigurationComponent implements OnInit {

    constructor(private cfgService: ConfigurationService) { }
    sDB: String;
    ngOnInit() {
        this.sDB='ET3';
    }
    getDBName() {
        console.log('KonfigurationComponent:  getDBName()');
        return this.sDB;
    }
    setDB(sName) {
        console.log('KonfigurationComponent:  setDB()');
        this.cfgService.setDB(sName)
            .subscribe(x => this.sDB=x);
    }
/*
    getDBMode() {
        console.log('KonfigurationComponent:  getDBMode()');
        return myGlobals.okMock;
    }
    setDBMode(sMode) {
        console.log('KonfigurationComponent:  setDBMode()');
        myGlobals.setMock(sMode);
    }
*/
}
