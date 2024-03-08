import { Component } from '@angular/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrl: './soma.component.css'
})
export class SomaComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  calc (operador: string) {
    switch(operador){
      case'soma':
      this.resultado = Number(this.num1) + Number(this.num2);
      break;
      case'sub':
      this.resultado = Number(this.num1) - Number(this.num2);
      break;
      case'mul':
      this.resultado = Number(this.num1) * Number(this.num2);
      break;
      case'div':
      this.resultado = Number(this.num1) / Number(this.num2);
      break;
      case 'raiz':
        this.resultado = Math.sqrt(Number(this.num1));
        break;
        case 'por':
          this.resultado = (Number(this.num1) * Number(this.num2)) / 100;
          break;

  }
}
}
