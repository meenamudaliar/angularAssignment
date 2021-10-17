import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PropertyComponent } from './property/property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { RouterModule } from '@angular/router';
import { PropertyServiceService } from './property-service.service';


@NgModule({
  declarations: [
    AppComponent,
   
    PropertyComponent,
    
        PropertyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [PropertyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
