import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle,IonButtons,  IonMenuButton, IonToolbar, IonCard, IonCardSubtitle,  IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {pin, pinOutline, pinSharp} from 'ionicons/icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonLabel, IonItem, IonCardContent, IonCardHeader, IonCardSubtitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,  IonMenuButton, CommonModule, FormsModule, IonCardTitle]
})
export class CardPage implements OnInit {

  constructor() {
    addIcons({pin, pinOutline, pinSharp});
    title:"card";
  }

  ngOnInit() {
  }

}
