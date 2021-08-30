import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { VehiclePage } from '../vehicle/vehicle';


@IonicPage()
@Component({
  selector: 'page-addcar',
  templateUrl: 'addcar.html',
})
export class AddcarPage {
  data = {
    id: 0,
    vtype: '',
    ftype: '',
    description: ''
  }
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public sqlite: SQLite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcarPage');
  }
  saveDate() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO cars VALUES(NULL,?,?, ?)', [
        this.data.vtype,
        this.data.ftype,
        this.data.description
      ]).then((res) => {
        console.log('Executed SQL insert');
        this.navCtrl.push(VehiclePage);
      }).catch(e => console.log(e));
    }).catch(e => console.log(e));
  }
}
