import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonHeader, IonButtons, IonToolbar, IonTitle, IonMenuButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, homeOutline, homeSharp, mailSharp, dice, diceOutline, diceSharp } from 'ionicons/icons';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonTitle, IonToolbar, IonButtons, IonHeader, RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet,IonMenuButton],
})
export class AppComponent {
  public menuCollections = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Alert', url: 'alert', icon: 'dice' },
    { title: 'Action Sheet', url: 'actionsheet', icon: 'dice' },
    { title: 'Accordion', url: 'accordion', icon: 'dice' },
    { title: 'Button', url: 'button', icon: 'dice' },
    { title: 'Card', url: 'card', icon: 'dice' },
    { title: 'Componente - Tags', url: 'tags', icon: 'dice' },
    { title: 'Componente - JS', url: 'js', icon: 'dice' },
    { title: 'Datetime', url: 'datetime', icon: 'dice' }
  ];

  public infoPage = {title: "TituloDaPágina"}

  constructor(private router: Router) {
    addIcons({ dice, diceOutline, diceSharp,home, homeOutline, homeSharp, mailSharp});

    this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
    const current = this.menuCollections.find(item => this.router.url.includes(item.url));
    this.infoPage.title = current?.title || 'Ionic App';
  });
  }
}
