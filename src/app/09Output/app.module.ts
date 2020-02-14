import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// For [(ngModel)] support
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { AddressComponent } from './address.component';

@NgModule({
  declarations: [
    AppComponent,  
    CustomerDetailComponent,
    CustomerListComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
