import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public loginForm: FormGroup;
  public textoUsuario: 'unipam';
  public textoPassword: '123';
  public resultado: String;
  

  constructor(public formBuilder: FormBuilder, 
              public navCtrl: NavController, 
              public alertCtrl: AlertController) 
    {
     this.loginForm = formBuilder.group({
      matricula: [this.textoUsuario],
      password: [this.textoPassword]
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
              this.navCtrl.push(HomePage);
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
    //this.navCtrl.push('ListarPage', { matricula: values.matricula.trim() })
  }


}


