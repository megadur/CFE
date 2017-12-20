import { Component, OnInit } from '@angular/core';
import { BESTAND } from '../bestand-mock';

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
