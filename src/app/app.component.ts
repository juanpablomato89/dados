import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ruta = '../assets/img'
  dadoIzda = `${this.ruta}/dice1.png`
  dadoDerecha = `${this.ruta}/dice4.png`
  numero1: number = 0;
  numero2: number = 1;

  constructor() { }

  tirarDados(): void {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;   

    this.dadoIzda = `${this.ruta}/dice${this.numero1}.png`;
    this.dadoDerecha = `${this.ruta}/dice${this.numero2}.png`;
  }
}
