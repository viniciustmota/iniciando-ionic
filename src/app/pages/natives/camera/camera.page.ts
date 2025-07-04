import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard } from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: true,
  imports: [IonCard, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CameraPage implements OnInit {
foto:any;
  constructor() { }

  ngOnInit() {
  }

  tirarFoto = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Base64
  });

  let base64Image = 'data:image/jpeg;base64,' + image.base64String;
  
  this.foto = base64Image
};
}

