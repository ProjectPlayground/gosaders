import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { GameDetailPage } from '../game-detail/game-detail';

@Component({
  selector: 'page-bms-soccer',
  templateUrl: 'bms-soccer.html'
})
export class BMSSoccerPage {

  game: Array<any>;

  games: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, af: AngularFire) {
  	this.games = af.database.list('/msbsoccer');    
  }

  itemTapped(event,game) {
    this.navCtrl.push(GameDetailPage, { game: game,
       callingPage: "MS Boys Soccer" });
  }

  ionViewDidLoad() {
    console.log('Hello BMSSoccerPage Page');
  }

}
