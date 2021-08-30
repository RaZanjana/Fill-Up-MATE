import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';


@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {
  subject = '';
  body = '';
    
    
  constructor(public navCtrl: NavController,
    public emailComposer: EmailComposer,
    public loadingCtrl: LoadingController) {

    
  }

  submit() {
    let email = {
      to: 'ccu@ceypetco.gov.lk',
      cc: 'vidura99@gmail.com',
      bcc: 'janaksiri@gmail.com',
      attachment: [],
      subject: this.subject,
      body: this.body,
      isHtml: false,
      app: "Gmail"
    }
    this.emailComposer.open(email);
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '"Check the bottom line of marker infowindow in map"'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }
}

