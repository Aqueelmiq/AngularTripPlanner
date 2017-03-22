import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyD1J-HLZlVuWMjV0lmVRKNbZGr9D9Fzn0E",
  authDomain: "tripplanner-ab44c.firebaseapp.com",
  databaseURL: "https://tripplanner-ab44c.firebaseio.com",
  storageBucket: "tripplanner-ab44c.appspot.com",
  messagingSenderId: "152222492679"
};
firebase.initializeApp(config);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
