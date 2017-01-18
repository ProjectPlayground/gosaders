import { Component } from '@angular/core';
import { Splashscreen } from 'ionic-native';
import { NavController } from 'ionic-angular';

import {AngularFire} from 'angularfire2';

import { NewsPage } from '../news/news';
import { SpotlightPage } from '../spotlight/spotlight';
import { TeamListPage } from '../team-list/team-list';
import { SocialPage } from '../social/social';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //tab1Root: any = NewsPage;
  //tab2Root: any = TeamListPage;
  constructor(public navCtrl: NavController, af: AngularFire) {

    Splashscreen.show();
    
  }

  goToNews() {
  	this.navCtrl.push(NewsPage);
  }

  goToSpotlight() {
  	this.navCtrl.push(SpotlightPage);
  }

  goToTeams() {
    this.navCtrl.push(TeamListPage);
  }

  goToSocial() {
    this.navCtrl.push(SocialPage);
  }

}