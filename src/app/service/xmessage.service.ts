import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { XMessage } from '../model/x_message';
import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class XMessageService {

    private sUrl = 'http://localhost:3300';  // URL to web api
    private sMessage='xmessages';
    a: Observable<XMessage>;

    constructor(
        private http: HttpClient,
        private messageService: MessageService) {
        this.log('constructor()');
    }

    // GET XBestand by guid. Will 404 if id not found
    getXMessageById(id: string): Observable<XMessage> {
        if(id != ''){
            const url = `${this.sUrl}/${this.sMessage}?MSG_ID=${id}`;
        return this.http.get<XMessage>(url)
            .pipe(
            tap(_ => this.log(`fetched XMessage for ${url}`)),
            catchError(this.handleError<XMessage>(`getXMessageById id=${id}`))
            );
        }
    }
    getXMessageListBySoId(soid: string): Observable<XMessage[]> {
        let s = 'getXMessageListBySoId for ' + soid;
        this.log(s);
        const sFlt = `SO_ID=${soid}`;
        const url = `${this.sUrl}/${this.sMessage}?${sFlt}`;
        this.log(s + ' with ' + url);
        return this.http.get<XMessage[]>(url)
            .pipe(
                tap(x => this.log(`${s} fetched ${x.length}`)),
                catchError(this.handleError<any[]>(`${s} failed for ${url}`))
            );
    }
    getXMessageListByEoId(eoid: string): Observable<XMessage[]> {
        let s = 'getXMessageListByEoId for ' + eoid;
        this.log(s);
        const sFlt = `EO_ID=${eoid}`;
        const url = `${this.sUrl}/${this.sMessage}?${sFlt}`;
        this.log(s + ' with ' + url);
        return this.http.get<XMessage[]>(url)
            .pipe(
                tap(x => this.log(`${s} fetched ${x.length}`)),
                catchError(this.handleError<any[]>(`${s} failed for ${url}`))
            );
    }
    getXMessageZipByEoId(eoid: string): Observable<any> {
        let s = 'getXMessageZipByEoId for ' + eoid;
        this.log(s);
        const sFlt = `EO_ID=${eoid}`;
        const url = `${this.sUrl}/${this.sMessage}?${sFlt}`;
        this.log(s + ' with ' + url);
        // http://localhost:3300/xmessage?EO_ID=XDM000000192928
        return this.http.get<XMessage[]>(url)
            .pipe(
                tap(x => this.log(`${s} fetched ${x.length}`)),
                catchError(this.handleError<any[]>(`${s} failed for ${url}`))
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
            this.log(`${operation} failed with: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a Service message with the MessageService */
    private log(message: string) {
        console.log('XMessageService: ' +message);
        this.messageService.add('XMessageService: ' + message);
    }
}
