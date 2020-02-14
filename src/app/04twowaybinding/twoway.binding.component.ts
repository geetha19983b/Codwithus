import { Component } from '@angular/core';

// {{}} interpolation - Component to DOM
// []   property binding - Component to DOM
// ()   event binding - DOM to Component

@Component({
  selector: 'my-two-way',
  template: `
  <h1>{{name}}</h1>

  <p><i>{{name}} is at {{street}} in {{city}} in the {{region}} region.</i></p>

  <br>

  <fieldset>
  <label>
    Name:<br>
    <input [value]="name" placeholder="Customer name"> 
<br>
    <input #nameBox [value]="name" (input)="name=nameBox.value" placeholder="Customer name">          

    <input [value]="name" (keyup)="nameChange($event.target.value)" placeholder="Customer name">      

    <input [value]="name" (keyup.enter)="nameChange($event.target.value)" placeholder="Customer name">

    <input [value]="name"
           (keyup.enter)="nameChange($event.target.value)"
           (blur)="nameChange($event.target.value)"
           placeholder="Customer name">                                                               

    <input [(ngModel)]="name" placeholder="Customer name">                                           

    <input [ngModel]="name" (ngModelChange)="name=$event" placeholder="Customer name">              
  </label>
</fieldset>

  <label><input type="checkbox" [(ngModel)]="hideAddress"/>Hide address</label>

  <button (click)="addressClick()">Show/Hide address</button>

  <div [hidden]="hideAddress">
    <h3>Address:</h3>
    <fieldset>
      <label>Street:  <input [(ngModel)]="street" placeholder="Street Name">     </label>
    </fieldset>
    <fieldset>
      <label>City:  <input [(ngModel)]="city" placeholder="City Name"> </label>
    </fieldset>
    <fieldset>
      <label>
        Region:
        <select [(ngModel)]="region">
          <option>North</option>
          <option>South</option>
          <option>East</option>
          <option>West</option>
        </select>
      </label>
    </fieldset>
  </div>

 

  `,
})

export class AppComponent  {
  name = 'Alex Smith';
  city = 'Anytown';
  street = '123 Main Street';
  region = 'East';
  hideAddress = false;


  addressClick() {
    this.hideAddress = !this.hideAddress;
  }

  nameChange(name: string) {
    this.name = name;
  }

  regionChange(region: string) {
    this.region = region;
  }
}
