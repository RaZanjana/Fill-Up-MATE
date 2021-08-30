import { Component, ViewChild, ElementRef, Injectable} from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ContactUsPage } from '../contact-us/contact-us';
import { Petrol95Page } from '../petrol95/petrol95';
import { Petrol92Page } from '../petrol92/petrol92';
import { LsdPage } from '../lsd/lsd';
import { LadPage } from '../lad/lad';
import { LkPage } from '../lk/lk';
import { VehiclePage } from '../vehicle/vehicle';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { NightHomePage } from '../night-home/night-home';
import { Storage } from '@ionic/storage';

declare var google;
var destination;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LaunchNavigator]
})
@Injectable()
export class HomePage {
  destination : any;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  destinationPoint: any;
  constructor(public navCtrl: NavController,
    private geolocation: Geolocation,
    private http: Http,
    public navParams: NavParams,
    private launchNavigator: LaunchNavigator,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private storage: Storage 
  ) {
    
  }
  

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Oops! :( Direction Feature is not available with this version',
      duration: 5000,
      position: position
    });

    toast.present(toast);
  }

  
  opennightmodePage() {
    let loading = this.loadingCtrl.create({
      content: 'Night Mode is stating...' + '\n' + '(This option allowed for main map only!)'
    });

    loading.present();


    this.navCtrl.push(NightHomePage);


    setTimeout(() => {
      loading.dismiss();
    }, 8000);

  }
    
  open95Page() {
    let loading = this.loadingCtrl.create({
      content: 'This will navigate to the Octane 95 Petrol page and then dismiss after few seconds.'
    });

    loading.present();

    
      this.navCtrl.push(Petrol95Page);
    

    setTimeout(() => {
      loading.dismiss();
    }, 8000);
  
  }
  open92Page() {
    let loading = this.loadingCtrl.create({
      content: 'This will navigate to the Octane 92 Petrol page and then dismiss after few seconds.'
    });

    loading.present();


    this.navCtrl.push(Petrol92Page);


    setTimeout(() => {
      loading.dismiss();
    }, 8000);

  }
  openladPage() {
    let loading = this.loadingCtrl.create({
      content: 'This will navigate to the Lanka Auto Diesel page and then dismiss after few seconds.'
    });

    loading.present();


    this.navCtrl.push(LadPage);


    setTimeout(() => {
      loading.dismiss();
    }, 8000);

  }
  openlsdPage() {
    let loading = this.loadingCtrl.create({
      content: 'This will navigate to the Lanka Super Diesel page and then dismiss after few seconds.'
    });

    loading.present();


    this.navCtrl.push(LsdPage);


    setTimeout(() => {
      loading.dismiss();
    }, 8000);

  }
  openlkPage() {
    let loading = this.loadingCtrl.create({
      content: 'This will navigate to the Lanka Kerosene page and then dismiss after few seconds.'
    });

    loading.present();


    this.navCtrl.push(LkPage);


    setTimeout(() => {
      loading.dismiss();
    }, 8000);

  }
  openCommentsPage() {
    this.navCtrl.push(ContactUsPage);
  }
  openVehiclePage() {
    this.navCtrl.push(VehiclePage);
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
  }

  displayGoogleMap() {

    let loading = this.loadingCtrl.create({
      content: 'This will take few seconds to load this application. Please wait!',
      duration: 10000
    });

    loading.present();
  
    
    this.geolocation.getCurrentPosition().then((position) => {
      let latlong = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let options = {
        center: latlong,
        zoom: 14,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        styles:

          [
            {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#7d7d7d"
                },
                {
                  "saturation": -60
                },
                {
                  "lightness": 75
                }
              ]
            },
            {
              "featureType": "poi",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.attraction",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.government",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.medical",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.place_of_worship",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.school",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.sports_complex",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#000000"
                },
                {
                  "saturation": -75
                },
                {
                  "lightness": 80
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#000000"
                },
                {
                  "saturation": 60
                },
                {
                  "lightness": 85
                },
                {
                  "weight": 0.5
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#000000"
                },
                {
                  "saturation": -60
                },
                {
                  "lightness": 75
                },
                {
                  "weight": 0.5
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#0080c0"
                },
                {
                  "saturation": -45
                },
                {
                  "lightness": 40
                }
              ]
            }
          ]
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, options);
      var infowindow = new google.maps.InfoWindow({
        content: '<b>' + 'You Are Here!' + '</b>'
      });
      var marker = new google.maps.Marker({
        position: latlong,
        map: this.map,
        title: 'You are Here!',
        animation: google.maps.Animation.DROP,
        draggable: false,
        icon: {
          url: "../assets/imgs/currentLocation.png",
          scaledSize: new google.maps.Size(20, 20)
        }
      })
      var cityCircle = new google.maps.Circle({
        strokeColor: '#C0C0C0',
        strokeOpacity: 0.9,
        strokeWeight: 2,
        fillColor: '#C0C0C0',
        fillOpacity: 0.4,
        map: this.map,
        center: latlong,
        radius: 2000
      });
      this.http.get('https://raw.githubusercontent.com/vidura/CPC_mobile/json/results.json').map((res) => res.json()).subscribe(data => {
        this.addMarkersMap(data, latlong);
      });
      marker.addListener('click', function () {
        infowindow.open(this.map, marker);
      });
    });
  }



  addMarkersMap(markers, lat) {
    
   
    for (let marker of markers) {
      var details =
        '<div>' + '<h1 style="font-size: 13px; border-radius: 0 0 7px 7px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); margin-bottom:0">' + marker.name + '</h1>' + '</div>'
        + '<div>' + '<h2 style="font-size: 11px; border-radius: 0 0 7px 7px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); margin-top:0">' + marker.scity + '</h2>' + '</div>'
        + '<div>' + '<p style="font-size: 9px; margin-bottom:0">' + '<b>' + 'Available Products' + '</b>' + '</p>' + '</div>'
        + '<div>' + '<p style="font-size: 10px; margin-top:0">' + marker.sproducts + '</p>' + '</div>'
        + '<hr>'
        + '<div>' + '<p style="font-size: 9px; margin-bottom:0">' + '<b>' + 'Other Facilities' + '</b>' + '</p>' + '</div>'
        + '<div>' + '<p style="font-size: 10px; margin-top:0; margin-bottom:0">' + 'Toilet : ' + marker.bathroom + '</p>' + '</div>'
        + '<div>' + '<p style="font-size: 10px; margin-top:0; margin-bottom:0">' + 'Air : ' + marker.air + '</p>' + '</div>'
        + '<div>' + '<p style="font-size: 10px; margin-top:0; margin-bottom:0">' + 'ATM : ' + marker.atm + '</p>' + '</div>'
        + '<div>' + '<p style="font-size: 10px; margin-top:0">' + 'SuperMarket : ' + marker.market + '</p>' + '</div>'
        + '<hr>'
        + '<div>' + '<p style="font-size: 9px">' + '<b>' + 'Opening hours : ' + marker.openhours + '</b>' + '</p>' + '</div>'
        + '<hr>'
        + '<div>' + '<p style="font-size: 9px">' + '<b>' + 'Contact Number : ' + marker.contact + '</b>' + '</p>' + '</div>'
        + '<hr>'
        + '<div>' + '<p style="font-size: 9px">' + '<b>' + 'Customer ID : ' + marker.acct_no + '</b>' + '</p>' + '</div>'
        + '<hr>';


      var locationInfowindow = new google.maps.InfoWindow({
        content: details,
      });

      var type = marker.stype;


      if (type == "CPC_dealer") {

        var loc = { lat: marker.latitude, lng: marker.longitude };
        console.log(loc);
        marker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,
          name: marker.latitude + ',' + marker.longitude,
          position: loc,
          map: this.map,
          infowindow: locationInfowindow,
          icon: {
            url: "../assets/imgs/homeicon.png",
            scaledSize: new google.maps.Size(32, 32)
          }
        });
        marker.addListener('mouseover', function (e) {
          destination = marker.name;
          console.log(destination);
         // this.storage.set(destination);
          this.infowindow.open(this.map, marker);
          
        });
        
        marker.addListener('mouseout', function () {
          this.infowindow.close();
          destination = '';
          console.log(destination);
        });
        
      }
     
    }
    
    
  }

  

  launchByDest() {
    let options: LaunchNavigatorOptions = {
      app: this.launchNavigator.APP.GOOGLE_MAPS
    }
    this.launchNavigator.navigate(destination, options).then(() => {
      console.log("launched successfully");
    }).catch(() => {
      console.log("launch failed");
    })
  }
  


}
