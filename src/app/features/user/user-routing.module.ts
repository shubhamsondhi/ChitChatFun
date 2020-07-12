import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then( m => m.SharedPageModule)
  },
  {
    path: 'liked',
    loadChildren: () => import('./liked/liked.module').then( m => m.LikedPageModule)
  },
  {
    path: 'private',
    loadChildren: () => import('./private/private.module').then( m => m.PrivatePageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
