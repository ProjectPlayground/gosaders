import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { GameDetailPage } from '../game-detail/game-detail';

@Component({
  selector: 'page-bv-basketball',
  templateUrl: 'bv-basketball.html'
})
export class BVBasketballPage {

  game: Array<any>;

  games: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, af: AngularFire) {
  	this.games = af.database.list('/vbbasketball');    
  }

  itemTapped(event,game) {
    this.navCtrl.push(GameDetailPage, { game: game,
       callingPage: "V Boys Basketball" });
  }

  ionViewDidLoad() {
    console.log('Hello BVBasketballPage Page');
  }

}
