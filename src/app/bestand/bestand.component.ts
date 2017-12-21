import { Component, OnInit } from '@angular/core';
import { BESTAND } from '../service/bestand-mock';

@Component({
  selector: 'app-bestand',
  templateUrl: './bestand.component.html',
  styleUrls: ['./bestand.component.css']
})
export class BestandComponent implements OnInit {
  bestand  = BESTAND;
  constructor() { }

  ngOnInit() {
  }

}
