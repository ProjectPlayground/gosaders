import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { GameDetailPage } from '../game-detail/game-detail';


@Component({
  selector: 'page-jvb-basketball',
  templateUrl: 'jvb-basketball.html'
})
export class JVBBasketballPage {
  game: Array<any>;

  games: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, af: AngularFire) {
  	this.games = af.database.list('/jvbbasketball');    
  }

  itemTapped(event,game) {
    this.navCtrl.push(GameDetailPage, { game: game,
       callingPage: "JV Boys Basketball" });
  }

  ionViewDidLoad() {
    console.log('Hello JVBBasketballPage Page');
  }

}
