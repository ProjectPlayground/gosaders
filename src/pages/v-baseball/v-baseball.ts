import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { GameDetailPage } from '../game-detail/game-detail';

/*
  Generated class for the VBaseball page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-v-baseball',
  templateUrl: 'v-baseball.html'
})
export class VBaseballPage {

  game: Array<any>;

  games: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, af: AngularFire) {
  	this.games = af.database.list('/vbaseball');    
  }

  itemTapped(event,game) {
    this.navCtrl.push(GameDetailPage, { game: game,
       callingPage: "V Baseball" });
  }

  ionViewDidLoad() {
    console.log('Hello VBaseballPage Page');
  }

}
