import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
  standalone: true,
  imports: [IonDatetime, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DatetimePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
