import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Petrol95Page } from '../petrol95/petrol95';
import { Petrol92Page } from '../petrol92/petrol92';
import { LsdPage } from '../lsd/lsd';
import { LadPage } from '../lad/lad';
import { LkPage } from '../lk/lk';

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }
  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Oops! :( This Feature is not available with this version',
      duration: 4000,
      position: position
    });

    toast.present(toast);
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }

}
