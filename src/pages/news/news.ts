import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { NewsDetailPage } from '../news-detail/news-detail';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

  //teams: FirebaseListObservable<any>;
  news: FirebaseListObservable<any>;
  article: Array<any>;

  constructor(public navCtrl: NavController, af: AngularFire) {
  	this.news = af.database.list('/news');
    
  }

  itemTapped(event,article) {
    this.navCtrl.push(NewsDetailPage, { article: article });
  }

  ionViewDidLoad() {
    console.log('Hello NewsPage Page');
  }

}
