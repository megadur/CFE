import { Component, OnInit, Input } from '@angular/core';
import { XAuftragExt } from '../../../model/x_auftrag_ext';

@Component({
  selector: 'app-xauftrag-ext-detail',
  templateUrl: './xauftrag-ext-detail.component.html',
  styleUrls: ['./xauftrag-ext-detail.component.css']
})
export class XauftragExtDetailComponent implements OnInit {
  @Input() xAuftragExt: XAuftragExt;
  inp: string;

  constructor() { }

  ngOnInit() {
  }

}
