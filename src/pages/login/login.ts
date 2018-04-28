import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formularioPage } from '../formulario/formulario';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public loginForm: FormGroup;
  public resultado: String;
  

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController,
              public Frb: FormBuilder) 
    {
      
      this.loginForm = Frb.group({
        matricula: [null, [Validators.required]],
        password:  [null, [Validators.required]],
      });
    }

  showAlert(message) {
    let alert = this.alertCtrl.create
    ({
      title: 'Atenção',
      subTitle: message,
      buttons: 
      ['ok']
    });
    alert.present();
  }

  onSubmit(values) {
    if (values.matricula === 'unipam' && values.password === '123') {
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        subTitle: 'Deu certo',
        buttons: 
        [
          {
            text: 'Ok',
            handler: () => {
              this.navCtrl.push(formularioPage);
            }
          }
        ]
      });
      alert.present();
      
    } else { 
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        subTitle: 'Deu errado',
        buttons: 
        [
          {
            text: 'Ok',
            handler: () => {
              this.navCtrl.push(LoginPage);
            }
          }
        ]
      });
      alert.present();
      
    }
    
  }


}


