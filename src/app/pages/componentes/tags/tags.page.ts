import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBadge, IonLabel, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonBadge, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TagsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
