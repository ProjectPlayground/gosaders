import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { GameDetailPage } from '../game-detail/game-detail';


/*
  Generated class for the GMSSoccer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gms-soccer',
  templateUrl: 'gms-soccer.html'
})
export class GMSSoccerPage {

  game: Array<any>;

  games: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, af: AngularFire) {
  	this.games = af.database.list('/msgsoccer');    
  }

  itemTapped(event,game) {
    this.navCtrl.push(GameDetailPage, { game: game,
       callingPage: "MS Girls Soccer" });
  }

  ionViewDidLoad() {
    console.log('Hello GMSSoccerPage Page');
  }

}
