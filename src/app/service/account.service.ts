import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Account } from '../model/account';
import { ACCOUNT } from './account-mock';
import { MessageService } from './message.service';

import { Em } from '../model/em';
import { Rnr } from '../model/rnr';
import { Spr } from '../model/spr';
import { Ins } from '../model/ins';
import { Par } from '../model/par';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AccountService {

  //  private sUrl = 'api/heroes';  // URL to web api
  private sUrl = 'http://localhost:3300/account';  // URL to web api
  a:Observable<Account>;
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET Account by id. Will 404 if id not found */
  getAccount(guid: string): Observable<Account> {
    this.messageService.add('AccountService: getAccount() for ' + guid);
    //console.log("AccountService: getAccount() in " + guid);
    const url = `${this.sUrl}/${guid}`;
   
    this.a = this.http.get<Account>(url)
      .pipe( 
        tap(_ => this.log(`fetched account=${guid}`)
      ),
      catchError(this.handleError<Account>(`account =${guid}`))
    );
     return this.a;
  }
  getAccountList(): Observable<Account[]> {
    this.messageService.add('AccountService: getAccountList()');
    //console.log("AccountService: getAccountList()")
    return this.http.get<Account[]>(this.sUrl)
      .pipe(
      tap(accounts => this.log(`fetched accounts`)),
      catchError(this.handleError('getAccountList', []))
      );
  }

  /** GET Account by guid. Will 404 if id not found */
  getEmList(guid: string): Observable<Em[]> {
    const url = `${this.sUrl}/${guid}/EM`;
    return this.http.get<Em[]>(url)
      .pipe(
        tap(_ => this.log(`fetched EMs for ${guid}`)),
        catchError(this.handleError<Em[]>(`getEm id=${guid}`)
      )
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a Service message with the MessageService */
  private log(message: string) {
    this.messageService.add('AccountService: ' + message);
  }
}
