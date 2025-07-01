import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Flashlight} from '@awesome-cordova-plugins/flashlight/ngx';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.page.html',
  styleUrls: ['./flash.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})


export class FlashPage implements OnInit {

  constructor(private flashlight: Flashlight) { }

  ngOnInit() {
  }

  ligar()
  {
    this.flashlight.switchOn();
  }

  desligar()
  {
    this.flashlight.switchOff();
  }
}
