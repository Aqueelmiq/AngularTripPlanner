import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UseraccessComponent } from './useraccess/useraccess.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { SearchComponent } from './results/search/search.component';
import { HotellistComponent } from './results/hotellist/hotellist.component';
import { RestaurantlistComponent } from './results/restaurantlist/restaurantlist.component';
import { FlightlistComponent } from './results/flightlist/flightlist.component';
import { ResultsComponent } from './results/results.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from '@angular/material';

const appRoutes: Routes = [
  { path: '', component: UseraccessComponent },
  {
    path: 'search/:location/:start/:end',
    component: ResultsComponent,
    data: { title: 'Heroes List' }
  },
  { path: 'search', component: ResultsComponent },
  { path: '**', component: NotFoundComponent }
];

export const config = {
  apiKey: "AIzaSyD1J-HLZlVuWMjV0lmVRKNbZGr9D9Fzn0E",
  authDomain: "tripplanner-ab44c.firebaseapp.com",
  databaseURL: "https://tripplanner-ab44c.firebaseio.com",
  storageBucket: "tripplanner-ab44c.appspot.com",
  messagingSenderId: "152222492679"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    UseraccessComponent,
    SearchComponent,
    HotellistComponent,
    RestaurantlistComponent,
    FlightlistComponent,
    ResultsComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AngularFireModule.initializeApp(config, myFirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
