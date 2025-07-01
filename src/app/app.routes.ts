import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/componentes/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'button',
    loadComponent: () => import('./pages/componentes/button/button.page').then( m => m.ButtonPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/componentes/card/card.page').then( m => m.CardPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./pages/componentes/alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'accordion',
    loadComponent: () => import('./pages/componentes/accordion/accordion.page').then( m => m.AccordionPage)
  },
  {
    path: 'actionsheet',
    loadComponent: () => import('./pages/componentes/actionsheet/actionsheet.page').then( m => m.ActionsheetPage)
  },
  {
    path: 'tags',
    loadComponent: () => import('./pages/componentes/tags/tags.page').then( m => m.TagsPage)
  },
  {
    path: 'js',
    loadComponent: () => import('./pages/componentes/js/js.page').then( m => m.JsPage)
  },
  {
    path: 'datetime',
    loadComponent: () => import('./pages/componentes/datetime/datetime.page').then( m => m.DatetimePage)
  },
  {
    path: 'camera',
    loadComponent: () => import('./pages/natives/camera/camera.page').then( m => m.CameraPage)
  },
  {
    path: 'flash',
    loadComponent: () => import('./pages/natives/flash/flash.page').then( m => m.FlashPage)
  },
];
