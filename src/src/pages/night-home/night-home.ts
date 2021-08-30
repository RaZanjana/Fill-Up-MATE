import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
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

declare var google;
var destination;


@IonicPage()
@Component({
  selector: 'page-night-home',
    templateUrl: 'night-home.html',
    providers: [LaunchNavigator]
})
export class NightHomePage {
  playing: string;
  destination: any;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  destinationPoint: any;
  constructor(public navCtrl: NavController,
    private geolocation: Geolocation,
    private http: Http,
    public navParams: NavParams,
    private launchNavigator: LaunchNavigator,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Oops! :( Direction Feature is not available with this version',
      duration: 5000,
      position: position
    });

    toast.present(toast);
  }




  open95Page() {
    let loading = this.loadingCtrl.create({
      content: 'Night Mode is not available with this page'
    });

    loading.present();


    this.navCtrl.push(Petrol95Page);


    setTimeout(() => {
      loading.dismiss();
    }, 8000);

  }
  open92Page() {
    let loading = this.loadingCtrl.create({
      content: 'Night Mode is not available with this page'
    });

    loading.present();


    this.navCtrl.push(Petrol92Page);


    setTimeout(() => {
      loading.dismiss();
    }, 8000);

  }
  openladPage() {
    let loading = this.loadingCtrl.create({
      content: 'Night Mode is not available with this page'
    });

    loading.present();


    this.navCtrl.push(LadPage);


    setTimeout(() => {
      loading.dismiss();
    }, 8000);

  }
  openlsdPage() {
    let loading = this.loadingCtrl.create({
      content: 'Night Mode is not available with this page'
    });

    loading.present();


    this.navCtrl.push(LsdPage);


    setTimeout(() => {
      loading.dismiss();
    }, 8000);

  }
  openlkPage() {
    let loading = this.loadingCtrl.create({
      content: 'Night Mode is not available with this page'
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
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#242f3e"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#746855"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#242f3e"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
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
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#263c3f"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#6b9a76"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#38414e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#212a37"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9ca5b3"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#746855"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#1f2835"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#f3d19c"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#2f3948"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#17263c"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "weight": 8
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#515c6d"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#17263c"
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
        + '<div>' + '<p style="font-size: 10px; margin-top:0; margin-bottom:0">' + 'Toilet : ' + marker.toilet + '</p>' + '</div>'
        + '<div>' + '<p style="font-size: 10px; margin-top:0; margin-bottom:0">' + 'Air : ' + marker.air + '</p>' + '</div>'
        + '<div>' + '<p style="font-size: 10px; margin-top:0; margin-bottom:0">' + 'ATM : ' + marker.atm + '</p>' + '</div>'
        + '<div>' + '<p style="font-size: 10px; margin-top:0">' + 'SuperMarket : ' + marker.supermarket + '</p>' + '</div>'
        + '<hr>'
        + '<div>' + '<p style="font-size: 9px">' + '<b>' + 'Shed ID : ' + marker.acct_no + '</b>' + '</p>' + '</div>'
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
