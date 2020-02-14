import { Component, Input } from '@angular/core';

import { Address } from './model';

@Component({
 
  selector: 'address-comp',
  templateUrl: 'address.component.html',
 // styleUrls: ['address.component.css']
})

export class AddressComponent  {
    @Input() address: Address;
    @Input() states:[];
    @Input() regions:[];
}