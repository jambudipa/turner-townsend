import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturedPlaylistsComponent } from './core/components/featured-playlists/featured-playlists.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/0',
    pathMatch: 'full'
  },
  {
    path: ':pageIndex',
    component: FeaturedPlaylistsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
