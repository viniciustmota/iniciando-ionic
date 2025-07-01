import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton , IonItem, IonList, IonSelect, IonSelectOption} from '@ionic/angular/standalone';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem, IonList, IonSelect, IonSelectOption]
})
export class ActionsheetPage implements OnInit {

  constructor() {}

  ngOnInit() {}
}
