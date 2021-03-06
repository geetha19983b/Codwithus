import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Customer } from './model';
import { DataService } from './data.service';

@Component({

  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html'
})

export class CustomerDetailComponent {
  @Input()
  customer: Customer;
  @Output()
  shift = new EventEmitter<number>();

  showAddress = true;
states=[];
  regions   = ['East', 'Midwest', 'North', 'South', 'West'];
  //states    = ['California', 'Illinois', 'Jalisco', 'Quebec'];

  constructor(private dataService:DataService){}

  ngOnInit()
  {
    this.dataService.getStates().subscribe({
      next: st => {
        this.states = st;
        
      },
      error: err => alert(err)
      });

  }
  left()  { this.shift.emit(-1); }
  right() { this.shift.emit(1); }
}
