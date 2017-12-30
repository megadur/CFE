import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { XAccountInfo } from '../model/x_account_info';
import { XHisAuftrag } from '../model/x_his_auftrag';

import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class XAuftragService {


  //  private sUrl = 'api/heroes';  // URL to web api
  private sUrl = 'http://localhost:3300/auftrag';  // URL to web api
  a: Observable<Account>;
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }



  /** GET Account by guid. Will 404 if id not found */
  getXAccInfoList(guid: string): Observable<XAccountInfo[]> {
    const url = `${this.sUrl}/${guid}/XAccountInfo`;
    return this.http.get<XAccountInfo[]>(url)
      .pipe(
      tap(_ => this.log(`fetched XAccountInfos for ${guid}`)),
      catchError(this.handleError<XAccountInfo[]>(`getXAccountInfo id=${guid}`))
      );
  }
  //XHisAuftrag
  /** GET Account by guid. Will 404 if id not found */
  getXHisAuftragList(guid: string): Observable<XHisAuftrag[]> {
    this.log("getXHisAuftragList")
    const url = `${this.sUrl}/${guid}/XHisAuftrag`;
    return this.http.get<XHisAuftrag[]>(url)
      .pipe(
      tap(_ => this.log(`fetched XHisAuftrags for ${guid}`)),
      catchError(this.handleError<XHisAuftrag[]>(`getXHisAuftrag id=${guid}`))
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
