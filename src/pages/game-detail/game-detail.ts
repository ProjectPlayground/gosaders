import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastController, NavController, NavParams, Platform } from 'ionic-angular';
import { ConnectivityService } from '../../providers/connectivity-service';
import { Geolocation } from 'ionic-native';
import { LaunchNavigator, LaunchNavigatorOptions } from 'ionic-native';

import { SocialSharing } from 'ionic-native';
import { Calendar } from 'ionic-native';

declare var google;
declare var window: any;


@Component({
  selector: 'page-game-detail',
  templateUrl: 'game-detail.html'
})

export class GameDetailPage {

  @ViewChild('map') mapElement: ElementRef;

  game: {};
  
  public gameAddr: string;
  public gameLocation: string;
  public navStart:string;
  public navEnd:string;
  public callingPage: string;

  //calendar events
  public gameOpponent: string;
  public title: string;
  public note: string;
  public startDateDate: Date;
  public endDateDate: Date;
  public startDateString: string;
  public endDateString: Date;
  public startDateTimeString: string;
  public startDateTime: Date;
  public startDateTimeHours: string;
  public startDateTimeMins: string;
 

  map: any;
  mapInitialized: boolean = false;
  apiKey: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, 
    public connectivityService: ConnectivityService,
    private toastCtrl: ToastController) {
    this.game = navParams.get('game');
    this.gameAddr = this.navParams.get('game').address;
    this.gameLocation = this.navParams.get('game').location;
    this.gameOpponent = this.navParams.get('game').opponent;

    this.loadGoogleMaps();

    this.navStart = '11605 E. Highway 92 Seffner, FL 33584';
    this.navEnd = this.gameAddr; 
    this.platform = platform;

    this.callingPage = this.navParams.get("callingPage"); 

    //calendar stuff
    this.title = 'SCA ' + this.callingPage + ' vs ' + this.gameOpponent;
    this.note = this.gameLocation + ' - ' + this.gameAddr;
    this.startDateString = this.navParams.get('game').date;
    this.endDateString = this.navParams.get('game').date;
    this.startDateTimeString = this.navParams.get('game').time;
    

    //if dates are Date, this works
     this.startDateDate = new Date(this.startDateString);
     console.log(' start date date = ' + this.startDateDate);
     this.endDateDate = new Date(this.endDateString);
     
     var parts,hours,minutes;
    parts = this.startDateTimeString.match(/(\d+)\:(\d+) (\w+)/),
    hours = /am/i.test(parts[3]) ? parseInt(parts[1], 10) : parseInt(parts[1], 10) + 12,
    minutes = parseInt(parts[2], 10);

    this.startDateTimeHours = hours;
    this.startDateTimeMins = minutes;

  }

  twitterShare(gameDate,startTime,home_away,opponent){
    SocialSharing.shareViaTwitter("GoSaders Game Info:"+this.callingPage+"-"+gameDate + " - " + startTime + " " + home_away + " vs." + opponent + ' @crusadersSCA', null, null); 
  }

  navigate(){
    this.platform.ready().then(() => {
      let options: LaunchNavigatorOptions = {
        //start: this.navStart
      };
      console.log('nav start ='+this.navStart);

      LaunchNavigator.navigate(this.navEnd, options)
          .then(
              success => {console.log('launched your navigator app.')},
              error => alert('Error launching your GPS navigator: ' + error)
      );

    });

    
  }

  loadGoogleMaps() {
      this.addConnectivityListeners();

      if(typeof google == "undefined" || typeof google.maps == "undefined"){
   
      
      this.disableMap();
   
      if(this.connectivityService.isOnline()){
        
        //Load the SDK
        window['mapInit'] = () => {
          this.initMap();
          this.enableMap();
        }
   
        let script = document.createElement("script");
        script.id = "googleMaps";
   
        script.src = 'http://maps.google.com/maps/api/js?key=asdf&callback=mapInit';

        document.body.appendChild(script);  
   
      } 
    }
    else {
   
      if(this.connectivityService.isOnline()){
        console.log("showing map");
        //this.initMap();
        console.log('called init from if statement');
        this.enableMap();

      }
      else {
        console.log("disabling map");
        this.disableMap();
      }
   
    }
   
  }

  initMap(){
 
    this.mapInitialized = true;
 
    Geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        'backgroundColor': 'white',
        'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
        },
        'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
        },
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    });
 
  }

  addConnectivityListeners() {

      let onOnline = () => {
   
        setTimeout(() => {
          if(typeof google == "undefined" || typeof google.maps == "undefined"){
   
            this.loadGoogleMaps();
   
          } else {
   
            if(!this.mapInitialized){
              this.initMap();
            }
   
            this.enableMap();
          }
        }, 2000);
   
      };
   
      let onOffline = () => {
        this.disableMap();
      };
   
      document.addEventListener('online', onOnline, false);
      document.addEventListener('offline', onOffline, false);
   
  }

  addMarker(){
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
   
    let content = "<h4>Information!</h4>";          
   
    this.addInfoWindow(marker, content);
  }


  addInfoWindow(marker, content){
 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  disableMap(){
    console.log("disable map");
    alert('You must be connected to the Internet to view this map.');
  }
 
  enableMap(){

    var geocoder = new google.maps.Geocoder();
    
    var address = this.gameAddr;
    
    console.log('address in enable map = '+address);
    geocoder.geocode({'address': address}, function(results, status) {
        if(status == google.maps.GeocoderStatus.OK) {
            if(status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                var latlng = new google.maps.LatLng(latitude, longitude);
                var myOptions = {
                    zoom: 15,
                    center: latlng,
                    mapTypeControl: true,
                    mapTypeControlOptions: {
                      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                      mapTypeIds: ['roadmap','terrain']
                    }
                };

                this.map = new google.maps.Map(document.getElementById('map'), myOptions);

                var marker = new google.maps.Marker({
                    position: latlng,
                    map: this.map,
                    title: this.gameLocation
                });
                marker.setMap(this.map);  //add the marker to the map.
                if (marker.getAnimation() !== null) {
                  marker.setAnimation(null);
                } else {
                  marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            } else if(status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                setTimeout(function(){ alert("Hello"); }, 3000);
              } 
              else {
              alert("No address found");
            }
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
  }

  ionViewDidLoad() {
    console.log('Hello GameDetailPage Page');

  }

  public createEvent() {

    console.log('inside create Event');

    let options:any = {
      firstReminderMinutes:60
    };

    //Calendar.createEvent("Event 1", "Location", "notes", new Date(2017, 1, 1, 13), new Date(2017, 1, 1, 14))
    Calendar.createEventInteractivelyWithOptions(this.title, this.gameAddr, this.note, 
      new Date(this.startDateDate.getFullYear(),(this.startDateDate.getMonth()),this.startDateDate.getDate(),parseInt(this.startDateTimeHours),parseInt(this.startDateTimeMins),0,0), 
      new Date(this.startDateDate.getFullYear(),(this.startDateDate.getMonth()),this.startDateDate.getDate(),parseInt(this.startDateTimeHours + 2 ),parseInt(this.startDateTimeMins),0,0), 
      options)
      .then(result => {
          console.log("1 create event success: ", result);
          let toast = this.toastCtrl.create({
            message: 'Game added to calendar successfully',
            duration: 3000,
            position: 'top'
          });
          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });

          toast.present();
      })
      .catch(error => {
        console.log("1 create event error: ", error)
      })

  }

}
