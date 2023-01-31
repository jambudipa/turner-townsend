import { HttpErrorResponse } from '@angular/common/http';

import { Action, createReducer, on } from '@ngrx/store';

import { FeaturedPlaylists } from '../../../models';
import * as fromActions from '../actions';

export interface FeaturedPlaylistsState {
  featuredPlaylists: FeaturedPlaylists;
  featuredPlaylistsLoading: boolean;
  featuredPlaylistsLoaded: boolean;
  pageSize: number;
  filterText: string;
  // this 'error' property should probably exist on some global state
  error: HttpErrorResponse;
}

export const initialState: FeaturedPlaylistsState = {
  featuredPlaylists: {
    name: '',
    content: []
  },
  featuredPlaylistsLoading: false,
  featuredPlaylistsLoaded: false,
  pageSize: 5,
  filterText: '',
  error: null
};

const createFeaturedPlaylistsReducer = createReducer(
  initialState,
  on(fromActions.getFeaturedPlaylists, (state) => ({
    ...state,
    featuredPlaylistsLoading: true,
    featuredPlaylistsLoaded: false,
    error: null
  })),
  on(fromActions.getFeaturedPlaylistsSuccess, (state, {featuredPlaylists}) => ({
      ...state,
      featuredPlaylists,
      featuredPlaylistsLoading: false,
      featuredPlaylistsLoaded: true
    })
  ),
  on(fromActions.setPageSize, (state, {pageSize}) => ({
    ...state,
    pageSize
  })),
  on(fromActions.setError, (state, {error}) => ({
    ...state,
    featuredPlaylistsLoading: false,
    featuredPlaylistsLoaded: false,
    error
  })),
  on(fromActions.setFeaturedPlaylistFilterText, (state, {filterText}) => ({
      ...state,
      filterText
    })
  )
);

export function featuredPlaylistsReducer(state: FeaturedPlaylistsState | undefined, action: Action) {
  return createFeaturedPlaylistsReducer(state, action);
}
