import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ACCOUNT  } from './account-mock';
import { Account } from './account';
import { MessageService } from './message.service';

@Injectable()
export class AccountService {

  constructor(private messageService: MessageService) { }
  getAccountList(): Observable<Account[]>  {
      this.messageService.add('AccountService: fetched accounts');
    return of(ACCOUNT);
  }
}
