import { Component, OnInit } from '@angular/core';

import { NavComponent } from './comp/all/nav/nav.component';
import * as myGlobals from './globals'; //<==== this one
import { ConfigurationService } from './service/configuration.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    constructor(private cfgService: ConfigurationService) { }

    ngOnInit() {
        let sMode = myGlobals.getMode();
        this.cfgService.setDB(sMode);
        myGlobals.setMode(sMode);

    }

}
