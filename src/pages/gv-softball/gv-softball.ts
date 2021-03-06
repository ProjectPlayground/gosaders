import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { GameDetailPage } from '../game-detail/game-detail';

/*
  Generated class for the GVSoftball page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gv-softball',
  templateUrl: 'gv-softball.html'
})
export class GVSoftballPage {

  game: Array<any>;

  games: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, af: AngularFire) {
  	this.games = af.database.list('/vsoftball');    
  }

  itemTapped(event,game) {
    this.navCtrl.push(GameDetailPage, { game: game,
       callingPage: "Varsity Softball" });
  }

  ionViewDidLoad() {
    console.log('Hello GVSoftballPage Page');
  }

}
