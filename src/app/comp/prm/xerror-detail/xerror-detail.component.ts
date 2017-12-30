import { Component, OnInit, Input } from '@angular/core';

import { XError } from '../../../model/x_error';

@Component({
  selector: 'app-xerror-detail',
  templateUrl: './xerror-detail.component.html',
  styleUrls: ['./xerror-detail.component.css']
})
export class XerrorDetailComponent implements OnInit {
  @Input() xError: XError;
  inp: string;

  constructor() { }

  ngOnInit() {
  }

}
