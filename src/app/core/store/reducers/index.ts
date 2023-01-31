import * as fromRouter from '@ngrx/router-store';

import { FeaturedPlaylistsState } from './featured-playlists.reducer';

export interface AppState {
  featuredPlaylistsState: FeaturedPlaylistsState;
  router: fromRouter.RouterReducerState<any>;
}

export * from './featured-playlists.reducer';
