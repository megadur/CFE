import { Component, OnInit, Input } from '@angular/core';

import { XHisAuftrag } from '../../../model/x_his_auftrag';

@Component({
  selector: 'app-xauftrag-his-detail',
  templateUrl: './xauftrag-his-detail.component.html',
  styleUrls: ['./xauftrag-his-detail.component.css']
})
export class XauftragHisDetailComponent implements OnInit {
  @Input() xHisAuftrag: XHisAuftrag;
  inp: string;

  
  constructor() { }

  ngOnInit() {
  }

}
