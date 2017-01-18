import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the TeamData page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-data',
  templateUrl: 'team-data.html'
})
export class TeamDataPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TeamDataPage Page');
  }

}
