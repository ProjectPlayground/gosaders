import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { JVVolleyballPage } from '../jv-volleyball/jv-volleyball';
import { JVBaseballPage } from '../jv-baseball/jv-baseball';
import { MSBaseballPage } from '../ms-baseball/ms-baseball';
import { VBaseballPage } from '../v-baseball/v-baseball';
import { GMSBasketballPage } from '../gms-basketball/gms-basketball';
import { GVBasketballPage } from '../gv-basketball/gv-basketball';
import { BMSBasketballPage } from '../bms-basketball/bms-basketball';
import { JVBBasketballPage } from '../jvb-basketball/jvb-basketball';
import { BVBasketballPage } from '../bv-basketball/bv-basketball';
import { CrossCountryPage } from '../cross-country/cross-country';
import { MSFootballPage } from '../ms-football/ms-football';
import { VFootballPage } from '../v-football/v-football';
import { GMSSoccerPage } from '../gms-soccer/gms-soccer';
import { GVSoccerPage } from '../gv-soccer/gv-soccer';
import { BMSSoccerPage } from '../bms-soccer/bms-soccer';
import { BVSoccerPage } from '../bv-soccer/bv-soccer';
import { MSSoftballPage } from '../ms-softball/ms-softball';
import { VSoftballPage } from '../v-softball/v-softball';
import { TennisPage } from '../tennis/tennis';
import { TrackPage } from '../track/track';
import { MSVolleyballPage } from '../ms-volleyball/ms-volleyball';
import { VVolleyballPage } from '../v-volleyball/v-volleyball';


@Component({
  selector: 'page-team-list',
  templateUrl: 'team-list.html'
})
export class TeamListPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TeamListPage Page');
  }

  goToJVBBasketball() {
    this.navCtrl.push(JVBBasketballPage);
  }

  goToMSBaseball() {
    this.navCtrl.push(MSBaseballPage);
  }

  goToJVBaseball() {
    this.navCtrl.push(JVBaseballPage);
  }

  goToVBaseball() {
    this.navCtrl.push(VBaseballPage);
  }

  goToGMSBasketball() {
    this.navCtrl.push(GMSBasketballPage);
  }

  goToGVBasketball() {
    this.navCtrl.push(GVBasketballPage);
  }

  goToBMSBasketball() {
    this.navCtrl.push(BMSBasketballPage);
  }
  
  goToBVBasketball() {
    this.navCtrl.push(BVBasketballPage);
  }

  goToCC() {
    this.navCtrl.push(CrossCountryPage);
  }

  goToMSFootball() {
    this.navCtrl.push(MSFootballPage);
  }

  goToVFootball() {
    this.navCtrl.push(VFootballPage);
  }

  goToGMSSoccer() {
    this.navCtrl.push(GMSSoccerPage);
  }

  goToGVSoccer() {
    this.navCtrl.push(GVSoccerPage);
  }

  goToBMSSoccer() {
    this.navCtrl.push(BMSSoccerPage);
  }

  goToBVSoccer() {
    this.navCtrl.push(BVSoccerPage);
  }

  goToMSSoftball() {
    this.navCtrl.push(MSSoftballPage);
  }

  goToVSoftball() {
    this.navCtrl.push(VSoftballPage);
  }
  goToTennis() {
    this.navCtrl.push(TennisPage);
  }

  goToTrack() {
    this.navCtrl.push(TrackPage);
  }

  goToMSVolleyball() {
    this.navCtrl.push(MSVolleyballPage);
  }

  goToJVVolleyball() {
    this.navCtrl.push(JVVolleyballPage);
  }

  goToVVolleyball() {
    this.navCtrl.push(VVolleyballPage);
  }

}
