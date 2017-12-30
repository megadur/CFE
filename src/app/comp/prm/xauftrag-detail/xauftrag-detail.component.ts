import { Component, OnInit, Input } from '@angular/core';

import { XAuftrag } from '../../../model/x_auftrag';

@Component({
  selector: 'app-xauftrag-detail',
  templateUrl: './xauftrag-detail.component.html',
  styleUrls: ['./xauftrag-detail.component.css']
})
export class XauftragDetailComponent implements OnInit {
  @Input() xAuftrag: XAuftrag;
  inp: string;

  constructor() { }

  ngOnInit() {
  }

}
