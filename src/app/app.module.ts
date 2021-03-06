import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// For [(ngModel)] support
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { AddressComponent } from './address.component';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

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
    HttpClientModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  
  ],
  providers: [ DataService,LoggerService ], // What services do I provide?
  bootstrap: [AppComponent]
})
export class AppModule { }
