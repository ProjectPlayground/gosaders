import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';

import { OneSignal } from 'ionic-native';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
   

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

	  OneSignal.startInit("myKey","");
	  OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);

	  OneSignal.handleNotificationReceived().subscribe(() => {
	    // do something when notification is received
	  });

	  OneSignal.handleNotificationOpened().subscribe(() => {
	    // do something when a notification is opened
	  });

	  OneSignal.endInit();

	  OneSignal.getIds().then(data => {
	    // this gives you back the new userId and pushToken associated with the device. Helpful.
	  });

	});


  }
}