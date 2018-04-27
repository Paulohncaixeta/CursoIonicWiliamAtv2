import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irParaOpen(open) {
    
        this.navCtrl.push('OpenPage');
        //this.alerta(pagina);
        //this.navCtrl.push(pagina, {codigo:"1", nome:"nome a ser passado"});
    
      }


}
