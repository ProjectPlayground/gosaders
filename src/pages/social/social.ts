import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

declare var cordova;
declare var platform;

@Component({
  selector: 'page-social',
  templateUrl: 'social.html'
})
export class SocialPage {

	social: Array<any>;
	socials: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,public platform: Platform, af: AngularFire) {
  	this.socials = af.database.list('/social');
  }

  ionViewDidLoad() {
    console.log('Hello SocialPage Page');
  }

  launch(url) {
        this.platform.ready().then(() => {
            cordova.InAppBrowser.open(url, "_system", "location=true");
        });
    }

}