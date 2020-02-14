// Observable DataService
import { Injectable } from '@angular/core';

import { Customer } from './model';
import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { delay } from 'rxjs/operators';


@Injectable()
export class DataService {
    private customerUrl = 'api/customers';
    private statesUrl = 'api/states';
    
  
  
    constructor(private http: HttpClient,
        private logger: LoggerService) { }
    /*   getCustomers(): Customer[] {
         const customers = createTestCustomers();
         this.logger.log(`Got ${customers.length} customers`);
        return customers;
      } */

    /** Get existing customers as a Promise */
    getCustomersP(): Promise<Customer[]> {
        this.logger.log('Getting customers as a Promise ...');

        const customers = createTestCustomers();

        return new Promise(resolve => {
            setTimeout(() => {
                this.logger.log(`Got ${customers.length} customers`);
                resolve(customers);
            }, 1500); // simulate server response latency
        });
    }

    /** Get existing customers as an Observable */
    /* getCustomers(): Observable<Customer[]> {
        this.logger.log('Getting customers as an Observable ...');

        const customers = createTestCustomers();

        return of(customers).pipe(
            delay(1500),
            tap(custs => this.logger.log(`Got ${custs.length} customers`)
            ));
    } */

    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.customerUrl)
          .pipe(
            //tap(data => console.log(JSON.stringify(data))),
            tap(custs => this.logger.log(`Got ${custs.length} customers`)),
            catchError(this.handleError)
          );
      }

      getStates():Observable<string[]>{
          return this.http.get<string[]>(this.statesUrl)
          .pipe(
              tap(st => this.logger.log(`Got ${st.length} states`)),
              catchError(this.handleError)
          )

      }
      
      private handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
      }
    
    
}
