import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { Md2Module }  from 'md2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from "angularfire2";
import { AppRoutingModule } from './app-routing.module';

import { HouseholdsModule } from "./households/households.module";

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
    apiKey: "AIzaSyASw9YtKSMQ7ThFpBLqPtKLp97tPhWDmwA",
    authDomain: "restore-hampers.firebaseapp.com",
    databaseURL: "https://restore-hampers.firebaseio.com",
    storageBucket: "restore-hampers.appspot.com",
    messagingSenderId: "97720338180"
  };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Md2Module.forRoot(),
    NgbModule.forRoot(),
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HouseholdsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
