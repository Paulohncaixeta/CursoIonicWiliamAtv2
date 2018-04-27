import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the OpenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open',
  templateUrl: 'open.html',
})
export class OpenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irParaLogin(Login) {
    
        this.navCtrl.push(LoginPage);
        //this.alerta(pagina);
        //this.navCtrl.push(pagina, {codigo:"1", nome:"nome a ser passado"});
    
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenPage');
  }

}
