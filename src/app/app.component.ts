import {Component, OnInit} from '@angular/core';
import {AngularFire} from 'angularfire2'
import {isSuccess} from "@angular/http/src/http_utils";
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title:String = 'Trip Planner';

  constructor(public af:AngularFire, public router:Router) {

  }

  ngOnInit() {
    this.af.auth.subscribe(
      (auth) => {this.router.navigate([''])}
    )
  }

  onLogout() {
    this.af.auth.logout().then(() => {console.log(isSuccess);});
  }


}
