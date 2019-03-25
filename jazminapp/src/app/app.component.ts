import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myth1 = ['Myth 1', 'Going cashless overseas is expensive.', 'With YouTrip, get 0% transaction fees in 150 currencies. \n Overseas travel becomes no longer expensive.', false, '/assets/img/main_1.jpg'];
  myth2 = ['Myth 2', 'Finding places to exchange currency is a hassle.', 'Lock down the best exchange rates before travelling with YouTrip. In addition, top up your card as and when, on the go.', false, '/assets/img/main_2.jpg'];
  myth3 = ['Myth 3', 'It is hard to keep track of expenses when you travel', 'Travel with a peace of mind with YouTrip by monitoring your spending in real time, and in your home currency.', false, '/assets/img/main_3.jpg'];
  myth4 = ['Myth 4', 'Applying for a multi-currency wallet is difficult.', 'Just download the YouTrip app, sign up, and receive the card in 7-10 days. The best part? It\'s FREE.', false, '/assets/img/main_4.jpg'];

  myths = [this.myth1, this.myth2, this.myth3, this.myth4];

  title = 'jazminapp';
}
