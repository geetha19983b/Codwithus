// Observable DataService
import { Injectable } from '@angular/core';

import { Customer } from './model';
import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class DataService {
    constructor(private logger: LoggerService) { }
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
    getCustomers(): Observable<Customer[]> {
        this.logger.log('Getting customers as an Observable ...');

        const customers = createTestCustomers();

        return of(customers).pipe(
            delay(1500),
            tap(custs => this.logger.log(`Got ${custs.length} customers`)
            ));
    }
}
