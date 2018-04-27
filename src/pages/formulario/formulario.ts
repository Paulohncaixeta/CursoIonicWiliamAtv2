import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
  selector: 'page-login',
  templateUrl: 'formulario.html',
})
export class formularioPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  public FormularioInscricaoForm: FormGroup;
  public primeiroNome: String;
  public sobrenome: String;
  public cidade: String;
  public email: String;
  public idade: String;
  

  constructor(public formBuilder: FormBuilder, 
              public navCtrl: NavController, 
              public alertCtrl: AlertController) 
    {
     this.FormularioInscricaoForm = formBuilder.group({
      primeiroNome: [this.primeiroNome],
      sobrenome:    [this.sobrenome],
      cidade:       [this.cidade],
      email:        [this.email],
      idade:        [this.idade]
      });
    }

    
      
    }

 

