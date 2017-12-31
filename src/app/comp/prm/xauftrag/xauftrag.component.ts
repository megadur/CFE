import { OnInit, Component, Input, SimpleChanges } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Account } from '../../../model/account';
import { XHisAuftrag } from '../../../model/x_his_auftrag';
import { XAuftrag } from '../../../model/x_auftrag';
import { XAuftragExt } from '../../../model/x_auftrag_ext';
import { XError } from '../../../model/x_error';
import { XMessage } from '../../../model/x_message';

import { XAuftragService } from '../../../service/xauftrag.service';

@Component({
  selector: 'app-xauftrag',
  templateUrl: './xauftrag.component.html',
  styleUrls: ['./xauftrag.component.css']
})
export class XAuftragComponent implements OnInit {
  @Input() account: Account;
  inp: string;

  xHisAuftrag_list: XHisAuftrag[];
  xHisAuftrag_selected: XHisAuftrag;
  
  xAuftrag_list: XAuftrag[];
  xAuftrag_selected: XAuftrag;

  xAuftragExt_list: XAuftragExt[];
  xAuftragExt_selected: XAuftragExt;

  xError_list: XError[];
  xError_selected: XError;

  xMessage_list: XMessage[];
  xMessage_selected: XMessage;

  constructor(private xAService: XAuftragService) { }

  ngOnInit() {
    this.inp = '100049016071215420200001';
    console.log("XbestandComponent:  ngOnInit()")
    this.getXHisAuftragList();
    this.getXAuftragList();
    this.getXAuftragExtList();
    this.getXMessageList();
    this.getXErrorList();
  }

  // XHisAuftrag
  onSelectXHisAuftrag(x_his_auftrag: XHisAuftrag): void {
    this.xHisAuftrag_selected = x_his_auftrag;
  }
  getXHisAuftragList(): void {
    console.log("getXHisAuftragList()")
    var guid: string;
    if (this.account)
      guid = this.account.GUID;
    if (this.inp)
      guid = this.inp;

    this.xAService.getXHisAuftragList(guid)
      .subscribe(x => this.xHisAuftrag_list = x);
  }

  // XAuftrag
  onSelectXAuftrag(x_auftrag: XAuftrag): void {
    console.log("onSelectXAuftrag()");
    this.xAuftrag_selected = x_auftrag;
  }
  getXAuftragList(): void {
    console.log("getXAuftragList()")
    var guid: string;
    if (this.account)
      guid = this.account.GUID;
    if (this.inp)
      guid = this.inp;

    this.xAService.getXAuftragList(guid)
      .subscribe(x => this.xAuftrag_list = x);
  }

  // XAuftragExt
  onSelectXAuftragExt(x_auftragExt: XAuftragExt): void {
    console.log("onSelectXAuftragExt()");
     this.xAuftragExt_selected = x_auftragExt;
  }
  getXAuftragExtList(): void {
    console.log("getXAuftragExtList()")
    var guid: string;
    if (this.account)
      guid = this.account.GUID;
    if (this.inp)
      guid = this.inp;

    this.xAService.getXAuftragExtList(guid)
      .subscribe(x => this.xAuftragExt_list = x);
  }

  // XError
  onSelectXError(xError: XError): void {
    console.log("onSelectXAuftragExt()");
     this.xError_selected = xError;
  }
  getXErrorList(): void {
    console.log("getXErrorList()")
    var guid: string;
    if (this.account)
      guid = this.account.GUID;
    if (this.inp)
      guid = this.inp;

    this.xAService.getXErrorList(guid)
      .subscribe(x => this.xError_list = x);
  }
  // XMessage
  onSelectXMessage(xMessage: XMessage): void {
    console.log("onSelectXMessage()");
     this.xMessage_selected = xMessage;
  }
  getXMessageList(): void {
    console.log("getXMessageList()")
    var guid: string;
    if (this.account)
      guid = this.account.GUID;
    if (this.inp)
      guid = this.inp;

    this.xAService.getXMessageList(guid)
      .subscribe(x => this.xMessage_list = x);
  }
}
