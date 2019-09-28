import { Component } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multiPrj';
  public multiplicaValores;
  public multiplicaValores2;

  constructor( public json:JsonService ) {

    this.multiplicaValores=this.json.getJson('https://reqres.in/api/color').subscribe(res=>this.multiplicaValores=res.data)
    this.multiplicaValores2=this.json.getJson('https://reqres.in/api/color?page=2').subscribe(res=>this.multiplicaValores2=res.data)

}
roller(id){
    var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
    var el2 = document.getElementById('anterior');
    var nombreBtn = document.getElementById('btnsiguiente');
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
    el2.style.display = (el2.style.display == 'none') ? 'block' : 'none';
    nombreBtn.innerText=(nombreBtn.innerText=="Anterior")?'Siguiente':'Anterior';
  }



  //copiar codigo hex
  copiarValor(id){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = id;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    var x = document.getElementById("myDIV");
    if(selBox.value==id){
      alert('¡COPIADO!')
    }

}
}
