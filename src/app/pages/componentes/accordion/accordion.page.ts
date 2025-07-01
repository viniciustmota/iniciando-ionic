import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAccordion, IonItem, IonLabel, IonList, IonAccordionGroup, IonButton } from '@ionic/angular/standalone';
import {caretDownCircle} from 'ionicons/icons'
import {addIcons} from'ionicons'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
  standalone: true,
  imports: [IonButton, IonAccordionGroup, IonList, IonLabel, IonItem, IonAccordion, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AccordionPage implements OnInit {

  constructor() {
    addIcons({caretDownCircle});
  }

  ngOnInit() {
  }

}
