import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as myGlobals from '../globals'; //<==== this one
import { XBestand } from '../model/x-bestand';
import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class XBestandService {

    private sUrl = 'http://localhost:3300/xbestand';  // URL to web api
    a: Observable<XBestand>;
    
    constructor(
        private http: HttpClient,
        private messageService: MessageService) {
        this.log('XBestandService()');
    }
    
    getXBestandListByGuid(guid: string): Observable<XBestand[]> {
        if(myGlobals.getMode()=='Mock')
            return this.getXBestandListByGuid_Mock(guid);        
        else
            return this.getXBestandListByGuid_CBE(guid);
        
    }
    
    // GET XBestand by guid. Will 404 if id not found
    private getXBestandListByGuid_Mock(guid: string): Observable<XBestand[]> {
        const sFlt =`${guid}.json` ;
        const url ='assets/json/XBestand/' + sFlt;
        return this.http.get<XBestand[]>(url)
            .pipe(
            tap(_ => this.log('fetched Mock'+ url)),
            catchError(this.handleError<any[]>('getXBestandListByGuid_Mock()' + url))
            );
    }

    // GET XBestand by guid. Will 404 if id not found
    private getXBestandListByGuid_CBE(guid: string): Observable<XBestand[]> {
        const url = `${this.sUrl}?GUID=${guid}`;
        return this.http.get<XBestand[]>(url)
            .pipe(
            tap(_ => this.log(`fetched XBestand for ${url}`)),
            catchError(this.handleError<XBestand[]>(`getXBestandListByGuid id=${guid}`))
            );
    }
    
    // GET XBestand by guid. Will 404 if id not found
    getXBestandList_ByParam(guid: string, tonr: string, kdnr: string, stid: string): Observable<XBestand[]> {
        if(myGlobals.getMode()=='Mock')
            return this.getXBestandList_ByParam_Mock(guid, tonr, kdnr, stid);        
        else
            return this.getXBestandList_ByParam_CBE(guid, tonr, kdnr, stid);
    }
    private getXBestandList_ByParam_Mock(guid: string, tonr: string, kdnr: string, stid: string): Observable<XBestand[]> {
        //const url = `${this.sUrl}/ALL?GUID=${guid}&TONR=${tonr}&KDNR=${kdnr}&STID=${stid}`;
        const sFlt =`GUID=${guid}_TONR=${tonr}_KDNR=${kdnr}_STID=${stid}.json` ;
        const url ='assets/json/XBestand/' + sFlt;
        return this.http.get<XBestand[]>(url)
            .pipe(
            tap(_ => this.log(`fetched XBestand for ${sFlt}`)),
            catchError(this.handleError<XBestand[]>(`getXBestandList_ByParam_Mock ${sFlt}`))
            );
    }

    private getXBestandList_ByParam_CBE(guid: string, tonr: string, kdnr: string, stid: string): Observable<XBestand[]> {
        const url = `${this.sUrl}/ALL?GUID=${guid}&TONR=${tonr}&KDNR=${kdnr}&STID=${stid}`;
        return this.http.get<XBestand[]>(url)
            .pipe(
            tap(_ => this.log(`fetched XBestand for ${url}`)),
            catchError(this.handleError<XBestand[]>(`getXBestandListByGuid id=${guid}`))
            );
    }
    // GET XBestand by guid. Will 404 if id not found
    getXBestandListAll_ByParam(guid: string, tonr: string, kdnr: string, stid: string): Observable<XBestand[]> {
        const url = `${this.sUrl}/ALL?GUID=${guid}&TONR=${tonr}&KDNR=${kdnr}&STID=${stid}`;
        return this.http.get<XBestand[]>(url)
            .pipe(
            tap(_ => this.log(`fetched XBestand for ${url}`)),
            catchError(this.handleError<XBestand[]>(`getXBestandListByGuid id=${guid}`))
            );
    }
    getXBestandListDet_ByParam(guid: string, tonr: string, kdnr: string, stid: string): Observable<XBestand[]> {
        const url = `${this.sUrl}/DET?GUID=${guid}&TONR=${tonr}&KDNR=${kdnr}&STID=${stid}`;
        return this.http.get<XBestand[]>(url)
            .pipe(
            tap(_ => this.log(`fetched XBestand for ${url}`)),
            catchError(this.handleError<XBestand[]>(`getXBestandListByGuid id=${guid}`))
            );
    }
    getXBestandListMsg_ByParam(guid: string, tonr: string, kdnr: string, stid: string): Observable<XBestand[]> {
        const url = `${this.sUrl}/MSG?GUID=${guid}&TONR=${tonr}&KDNR=${kdnr}&STID=${stid}`;
        return this.http.get<XBestand[]>(url)
            .pipe(
            tap(_ => this.log(`fetched XBestand for ${url}`)),
            catchError(this.handleError<XBestand[]>(`getXBestandListByGuid id=${guid}`))
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
        console.log(message);
        this.messageService.add('XBestandService: ' + message);
    }

}
