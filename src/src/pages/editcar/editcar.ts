import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@IonicPage()
@Component({
  selector: 'page-editcar',
  templateUrl: 'editcar.html',
})
export class EditcarPage {
  data = {
    id: 0,
    vtype: '',
    ftype: '',
    description: ''
  }
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public sqlite: SQLite) {

    this.data.id = navParams.get('id');
    this.data.vtype = navParams.get('vtype');
    this.data.ftype = navParams.get('ftype');
    this.data.description = navParams.get('description');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditcarPage');
  }
  update() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('UPDATE cars set vtype=?,ftype=?,description=? WHERE id=?', [
        this.data.vtype,
        this.data.ftype,
        this.data.description,
        this.data.id
      ]).then(() => {
        console.log('Executed SQL insert');
        this.navCtrl.pop();
      }).catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

}
