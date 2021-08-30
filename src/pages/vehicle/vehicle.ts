import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { AddcarPage } from '../addcar/addcar';
import { EditcarPage } from '../editcar/editcar';
import { Petrol95Page } from '../petrol95/petrol95';
import { Petrol92Page } from '../petrol92/petrol92';
import { LsdPage } from '../lsd/lsd';
import { LadPage } from '../lad/lad';


@Component({
  selector: 'page-vehicle',
  templateUrl: 'vehicle.html',
})
export class VehiclePage {
  data: any = [];
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
    public sqlite: SQLite) {
  }

  ionViewDidLoad() {
    this.getData();
  }
  refresh() {
    this.getData();
  }
  getData() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS cars(id INTEGER PRIMARY KEY,vtype TEXT,ftype TEXT, description TEXT)', []).then(() => console.log('Executed SQL')).catch(e => console.log(e));
      db.executeSql('SELECT * FROM cars ORDER BY id DESC', []).then(res => {
        console.log('Executed SQL SELECT done');
        this.data = [];
        for (var index = 0; index < res.rows.length; index++) {
          this.data.push({
            id: res.rows.item(index).id,
            vtype: res.rows.item(index).vtype,
            ftype: res.rows.item(index).ftype,
            description: res.rows.item(index).description
          })
        } 
      }).catch(e => console.log(e));
      }).catch(e => console.log(e));
  }

  addCar() {
    this.navCtrl.push(AddcarPage);
  }
  editCar(id, vtype, ftype, description) {
    this.navCtrl.push(EditcarPage, {
      id: id,
      vtype: vtype,
      ftype: ftype,
      description: description
    });
  }

  deleteCar(id) {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {


        db.executeSql('DELETE FROM cars WHERE id=?', [id])
          .then(() => {
            console.log('Executed SQL delete');
            this.getData();
          }).catch(e => console.log(e));
      }).catch(e => console.log(e));
  }

  map() {

    if (document.getElementById("fueltype").textContent == '95Petrol') {
      let loading = this.loadingCtrl.create({
        content: 'This will navigate to the Octane 95 Petrol page and then dismiss after few seconds.'
      });

      loading.present();


      this.navCtrl.push(Petrol95Page);


      setTimeout(() => {
        loading.dismiss();
      }, 8000);
    } else if (document.getElementById("fueltype").textContent == '92Petrol') {
      let loading = this.loadingCtrl.create({
        content: 'This will navigate to the Octane 92 Petrol page and then dismiss after few seconds.'
      });

      loading.present();


      this.navCtrl.push(Petrol92Page);


      setTimeout(() => {
        loading.dismiss();
      }, 8000);
    } else if (document.getElementById("fueltype").textContent == 'LSD') {
      let loading = this.loadingCtrl.create({
        content: 'This will navigate to the Lanka Super Diesel page and then dismiss after few seconds.'
      });

      loading.present();


      this.navCtrl.push(LsdPage);


      setTimeout(() => {
        loading.dismiss();
      }, 8000);
    } else if (document.getElementById("fueltype").textContent == 'LAD') {
      let loading = this.loadingCtrl.create({
        content: 'This will navigate to the Lanka Auto Diesel page and then dismiss after few seconds.'
      });

      loading.present();


      this.navCtrl.push(LadPage);


      setTimeout(() => {
        loading.dismiss();
      }, 8000);
    } else alert("You Need to Add Fuel Type!");
      
  }
}
