import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TeamListPage } from '../pages/team-list/team-list';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { NewsPage } from '../pages/news/news';
import { SpotlightPage } from '../pages/spotlight/spotlight';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { GameDetailPage } from '../pages/game-detail/game-detail';
import { JVVolleyballPage } from '../pages/jv-volleyball/jv-volleyball';
import { SocialPage } from '../pages/social/social';
import { JVBaseballPage } from '../pages/jv-baseball/jv-baseball';
import { MSBaseballPage } from '../pages/ms-baseball/ms-baseball';
import { VBaseballPage } from '../pages/v-baseball/v-baseball';
import { GMSBasketballPage } from '../pages/gms-basketball/gms-basketball';
import { GVBasketballPage } from '../pages/gv-basketball/gv-basketball';
import { BMSBasketballPage } from '../pages/bms-basketball/bms-basketball';
import { JVBBasketballPage } from '../pages/jvb-basketball/jvb-basketball';
import { BVBasketballPage } from '../pages/bv-basketball/bv-basketball';
import { CrossCountryPage } from '../pages/cross-country/cross-country';
import { MSFootballPage } from '../pages/ms-football/ms-football';
import { VFootballPage } from '../pages/v-football/v-football';
import { GMSSoccerPage } from '../pages/gms-soccer/gms-soccer';
import { GVSoccerPage } from '../pages/gv-soccer/gv-soccer';
import { BMSSoccerPage } from '../pages/bms-soccer/bms-soccer';
import { BVSoccerPage } from '../pages/bv-soccer/bv-soccer';
import { MSSoftballPage } from '../pages/ms-softball/ms-softball';
import { VSoftballPage } from '../pages/v-softball/v-softball';
import { TennisPage } from '../pages/tennis/tennis';
import { TrackPage } from '../pages/track/track';
import { MSVolleyballPage } from '../pages/ms-volleyball/ms-volleyball';
import { VVolleyballPage } from '../pages/v-volleyball/v-volleyball';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { IonicImageLoader } from 'ionic-image-loader';
import { ConnectivityService } from '../providers/connectivity-service';

export const firebaseConfig = {
      apiKey: "asdf",
      authDomain: "asdf",
      databaseURL: "asdf",
      storageBucket: "asdf",
      messagingSenderId: "asdf"
    };    

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TeamListPage,
    TeamDetailPage,
    NewsPage,
    SpotlightPage,
    NewsDetailPage,
    GameDetailPage,
    JVVolleyballPage,
    SocialPage,
    JVVolleyballPage,
    JVBaseballPage,
    MSBaseballPage,
    VBaseballPage,
    GMSBasketballPage,
    GVBasketballPage,
    BMSBasketballPage,
    JVBBasketballPage,
    BVBasketballPage,
    CrossCountryPage,
    MSFootballPage,
    VFootballPage,
    GMSSoccerPage,
    GVSoccerPage,
    BMSSoccerPage,
    BVSoccerPage,
    MSSoftballPage,
    VSoftballPage,
    TennisPage,
    TrackPage,
    MSVolleyballPage,
    VVolleyballPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    IonicImageLoader
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TeamListPage,
    TeamDetailPage,
    NewsPage,
    SpotlightPage,
    NewsDetailPage,
    GameDetailPage,
    JVVolleyballPage,
    SocialPage,
    JVVolleyballPage,
    JVBaseballPage,
    MSBaseballPage,
    VBaseballPage,
    GMSBasketballPage,
    GVBasketballPage,
    BMSBasketballPage,
    JVBBasketballPage,
    BVBasketballPage,
    CrossCountryPage,
    MSFootballPage,
    VFootballPage,
    GMSSoccerPage,
    GVSoccerPage,
    BMSSoccerPage,
    BVSoccerPage,
    MSSoftballPage,
    VSoftballPage,
    TennisPage,
    TrackPage,
    MSVolleyballPage,
    VVolleyballPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ConnectivityService]
})
export class AppModule {}
