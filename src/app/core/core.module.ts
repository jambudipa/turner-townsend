import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { FeaturedPlaylistsService } from './services/featured-playlists.service';
import { MaterialModule } from '../material/material.module';
import * as fromStore from './store';
import { environment } from '../../environments/environment';
import { FeaturedPlaylistsComponent } from './components/featured-playlists/featured-playlists.component';
import { FeaturedPlaylistsPresenterComponent } from './presenters/featured-playlists-presenter/featured-playlists-presenter.component';
import { FilterComponent } from './presenters/filter/filter.component';

@NgModule({
  declarations: [
    FeaturedPlaylistsComponent,
    FeaturedPlaylistsPresenterComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    StoreModule.forRoot({router: routerReducer, featuredPlaylistsState: fromStore.featuredPlaylistsReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([fromStore.FeaturedPlaylistsEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    FeaturedPlaylistsService
  ]
})
export class CoreModule {
}
