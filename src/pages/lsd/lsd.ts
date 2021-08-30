import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { CommentsPage } from '../comments/comments';
import { Petrol95Page } from '../petrol95/petrol95';
import { Petrol92Page } from '../petrol92/petrol92';
import { LadPage } from '../lad/lad';
import { LkPage } from '../lk/lk';
//import { MenuPage } from '../menu/menu';
import { VehiclePage } from '../vehicle/vehicle';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';


declare var google;
var destination;

@IonicPage()
  @Component({
    selector: 'page-lsd',
    templateUrl: 'lsd.html',
    providers: [LaunchNavigator]

  })
export class LsdPage {
  destination: any;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  destinationPoint: any;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private geolocation: Geolocation, private launchNavigator: LaunchNavigator, private http: Http) {

  }
  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`,
      duration: 5000
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    loading.present();
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
  openVehiclePage() {
    this.navCtrl.push(VehiclePage);
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
  }
  displayGoogleMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      let latlong = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let options = {
        center: latlong,
        zoom: 14,
        disableDefaultUI: true,
        compassEnabled: true,
        rotateGesturesEnabled: true,
        tiltGesturesEnabled: true,
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
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#C0C0C0',
        fillOpacity: 0.4,
        map: this.map,
        center: latlong,
        radius: 2000
      });
      this.http.get('https://raw.githubusercontent.com/vidura/CPC_mobile/json/results.json').map((res) => res.json()).subscribe(data => {
        this.addMarkersMapLsd(data, latlong);
      });
      marker.addListener('click', function () {
        infowindow.open(this.map, marker);
      });
    });
  }



  addMarkersMapLsd(markers, lat) {


    for (let marker of markers) {
      var details =
        '<div>' + '<h1 style="font-size: 13px; border-radius: 0 0 7px 7px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); margin-bottom:0">' + marker.name + '</h1>' + '</div>'
        + '<div>' + '<h2 style="font-size: 11px; border-radius: 0 0 7px 7px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); margin-top:0">' + marker.scity + '</h2>' + '</div>'
        + '<div>' + '<p style="font-size: 9px; margin-bottom:0">' + '<b>' + 'Available Product' + '</b>' + '</p>' + '</div>'
        + '<div>' + '<p style="font-size: 10px; margin-top:0">' + 'Octane 92 Petrol' + '</p>' + '</div>'
        + '<hr>'
        + '<div>' + '<p style="font-size: 9px; margin-bottom:0">' + '<b>' + 'Other Facilities' + '</b>' + '</p>' + '</div>'
        + '<div>' + '<p style="font-size: 10px; margin-top:0; margin-bottom:0">' + 'Toilet : ' + marker.bathroom + '</p>' + '</div>'
        + '<div>' + '<p style="font-size: 10px; margin-top:0; margin-bottom:0">' + 'Air : ' + marker.air + '</p>' + '</div>'
        + '<div>' + '<p style="font-size: 10px; margin-top:0; margin-bottom:0">' + 'ATM : ' + marker.atm + '</p>' + '</div>'
        + '<div>' + '<p style="font-size: 10px; margin-top:0">' + 'SuperMarket : ' + marker.market + '</p>' + '</div>'
        + '<hr>'
        + '<div>' + '<p style="font-size: 9px">' + '<b>' + 'Recent Availability : ' + marker.LAD_status + '</b>' + '</p>' + '</div>'
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

      var str = marker.sproducts;
      var products = str.split(",");
      var type = marker.stype;
      
      var i;
      for (i = 0; i < products.length; i++) {
        if (products[i] == "LSD" && type == "CPC_dealer") {
          var loc = { lat: marker.latitude, lng: marker.longitude };
          console.log(loc);
          marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: loc,
            name: marker.latitude + ',' + marker.longitude,
            map: this.map,
            infowindow: locationInfowindow,
            // title: marker.name,
            icon: {
              url: "../assets/imgs/lsdicon.png",
              scaledSize: new google.maps.Size(32, 32)
            }
          });
          marker.addListener('mouseover', function (e) {
            destination = marker.name;
            console.log(destination);
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
