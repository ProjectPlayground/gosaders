import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-spotlight',
  templateUrl: 'spotlight.html'
})
export class SpotlightPage {

  spotlight: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, af: AngularFire) {
  	this.spotlight = af.database.list('/spotlight');
    
  }

  ionViewDidLoad() {
    console.log('Hello SpotlightPage Page');
  }

}
