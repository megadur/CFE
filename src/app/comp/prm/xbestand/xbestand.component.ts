import { OnInit, Component, Input, SimpleChanges } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Account } from '../../../model/account';
import { XBestandService } from '../../../service/xbestand.service';

@Component({
  selector: 'app-xbestand',
  templateUrl: './xbestand.component.html',
  styleUrls: ['./xbestand.component.css']
})
export class XBestandComponent implements OnInit {
  @Input() account: Account;
  inp: string;
  
  constructor(private xbService: XBestandService) { }

  ngOnInit() {
    this.inp='100049016071215420200001';
    console.log("XbestandComponent:  ngOnInit()")
    
  }
  onSelect(): void {
  }


}
