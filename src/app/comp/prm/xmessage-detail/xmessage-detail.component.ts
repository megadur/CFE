import { Component, OnInit, Input } from '@angular/core';

import { XMessage } from '../../../model/x_message';

@Component({
  selector: 'app-xmessage-detail',
  templateUrl: './xmessage-detail.component.html',
  styleUrls: ['./xmessage-detail.component.css']
})
export class XmessageDetailComponent implements OnInit {
  @Input() xMessage: XMessage;
  inp: string;


  constructor() { }

  ngOnInit() {
  }

}
