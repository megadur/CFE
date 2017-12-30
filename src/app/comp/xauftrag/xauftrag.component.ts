import { OnInit, Component, Input, SimpleChanges } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Account } from '../../model/account';
import { XHisAuftrag } from '../../model/x_his_auftrag';
import { XAuftragService } from '../../service/xauftrag.service';

@Component({
  selector: 'app-xauftrag',
  templateUrl: './xauftrag.component.html',
  styleUrls: ['./xauftrag.component.css']
})
export class XAuftragComponent implements OnInit {
  @Input() account: Account;
  inp: string;

  XHisAuftrag_list: XHisAuftrag[];
  XHisAuftrag_selected: XHisAuftrag;
  constructor(private xAService: XAuftragService) { }

  ngOnInit() {
    this.inp = '100049016071215420200001';
    console.log("XbestandComponent:  ngOnInit()")

  }
  onSelect(x_his_auftrag: XHisAuftrag): void {
    this.XHisAuftrag_selected = x_his_auftrag;
  }
  getXHisAuftragList(): void {
    console.log("getXHisAuftragList()")
    var guid: string;
    if (this.account)
      guid = this.account.GUID;
    if (this.inp)
      guid = this.inp;

    this.xAService.getXHisAuftragList(guid)
      .subscribe(x => this.XHisAuftrag_list = x);
  }
}
