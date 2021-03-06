import { Component } from '@angular/core';

import { Customer } from './model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({

  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})

export class CustomerListComponent {

  customer: Customer;

  customers: Customer[];
  isBusy = false;
  errorMessage = '';
  // inject the DataService
  constructor(private dataService: DataService, private logger: LoggerService) { }

  ngOnInit() { this.getCustomers(); }

  getCustomers() {
    this.isBusy = true;
    this.logger.log('Getting customers ...');

    //this.dataService.getCustomersP().then(  // promise version
    /* this.dataService.getCustomers().subscribe( // observable version
      custs => {
        this.isBusy = false;
        this.customers = custs;
      });
 */
    this.dataService.getCustomers().subscribe({
      next: custs => {
        this.customers = custs;
        this.isBusy = false;
      },
      error: err => this.errorMessage = err
      });

}

shift(increment: number)
{
  let ix = increment + this.customers.findIndex(c => c === this.customer);
  ix = Math.min(this.customers.length - 1, Math.max(0, ix));
  this.customer = this.customers[ix];
}
}
