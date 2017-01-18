import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { GameDetailPage } from '../game-detail/game-detail';

@Component({
  selector: 'page-bms-basketball',
  templateUrl: 'bms-basketball.html'
})
export class BMSBasketballPage {

  game: Array<any>;

  games: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, af: AngularFire) {
  	this.games = af.database.list('/msbbasketball');    
  }

  itemTapped(event,game) {
    this.navCtrl.push(GameDetailPage, { game: game,
       callingPage: "MS Boys Basketball" });
  }

  ionViewDidLoad() {
    console.log('Hello MSBBasketballPage Page');
  }

}
