import { HttpErrorResponse } from '@angular/common/http';

import { createAction, props } from '@ngrx/store';

import { FeaturedPlaylists } from '../../../models';

export const getFeaturedPlaylists = createAction(
  '[Featured Playlists] Get Featured Playlists'
);

export const getFeaturedPlaylistsSuccess = createAction(
  '[Featured Playlists] Get Featured Playlists Success',
  props<{ featuredPlaylists: FeaturedPlaylists }>()
);

export const setPageSize = createAction(
  '[Featured Playlists] Set Page Size',
  props<{ pageSize: number }>()
);

export const setFeaturedPlaylistFilterText = createAction(
  '[Featured Playlists] Set Featured Playlists Filter Text',
  props<{ filterText: string }>()
);

export const setError = createAction(
  '[Featured Playlists] Set Error',
  props<{ error: HttpErrorResponse }>()
);
