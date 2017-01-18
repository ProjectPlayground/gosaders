import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';

declare var cordova;
declare var platform;

@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html'
})
export class NewsDetailPage {

	article: {};

  constructor(public navCtrl: NavController, private navParams: NavParams, public platform: Platform) {
  	this.article = navParams.get('article');
    this.platform = platform;
  }

  ionViewDidLoad() {
    console.log('Hello NewsDetailPage Page');
  }

  launch(url) {
        this.platform.ready().then(() => {
            cordova.InAppBrowser.open(url, "_system", "location=true");
        });
  }

  /**
   * Opens up the share sheet so you can share using the app you like the most.
   */
  regularShare(){
    // share(message, subject, file, url)
    SocialSharing.share("From GoSaders Mobile App", null, "www/assets/img/SCA_logo_transp.png", null); 
  }

  /**
   * This share's directly via twitter using the:
   * shareViaTwitter(message, image, url)
   */
  twitterShare(){
    SocialSharing.shareViaTwitter("From GoSaders Mobile App", "www/assets/img/SCA_logo_transp.png", null); 
  }

  twitterShare2(linkImg,url){
    SocialSharing.shareViaTwitter("From GoSaders Mobile App", linkImg, url); 
  }

  /**
   * This share's directly via Instagram using:
   * shareViaInstagram(message, image)
   */
  instagramShare(){
    SocialSharing.shareViaInstagram("From GoSaders Mobile App", "www/assets/img/SCA_logo_transp.png"); 
  }

  instagramThis2(linkImg){
    SocialSharing.shareViaInstagram("From GoSaders Mobile App", linkImg); 
  }

}