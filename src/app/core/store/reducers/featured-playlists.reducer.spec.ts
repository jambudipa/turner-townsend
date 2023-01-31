import { HttpErrorResponse } from '@angular/common/http';

import { Action } from '@ngrx/store';

import * as mocks from '../../../../mocks/mocks';
import * as fromStore from '..';

describe('Featured Playlists reducer', () => {
  let result: fromStore.FeaturedPlaylistsState;
  let action: Action;

  it('should return the initial state', () => {
    action = {type: 'NOOP'};
    result = fromStore.featuredPlaylistsReducer(undefined, action);

    expect(result).toEqual(fromStore.initialState);
  });

  it('[Featured Playlists] Get Featured Playlists', () => {
    action = fromStore.getFeaturedPlaylists();
    result = fromStore.featuredPlaylistsReducer(fromStore.initialState, action);

    expect(result).toEqual({
      ...fromStore.initialState,
      featuredPlaylistsLoading: true,
      featuredPlaylistsLoaded: false,
      error: null
    });
  });

  it('[Featured Playlists] Get Featured Playlists Success', () => {
    action = fromStore.getFeaturedPlaylistsSuccess({featuredPlaylists: mocks.featuredPlayLists});
    result = fromStore.featuredPlaylistsReducer(fromStore.initialState, action);

    expect(result).toEqual({
      ...fromStore.initialState,
      featuredPlaylists: mocks.featuredPlayLists,
      featuredPlaylistsLoading: false,
      featuredPlaylistsLoaded: true
    });
  });

  it('[Featured Playlists] Set Page Size', () => {
    const pageSize = 10;
    action = fromStore.setPageSize({pageSize});
    result = fromStore.featuredPlaylistsReducer(fromStore.initialState, action);

    expect(result).toEqual({
      ...fromStore.initialState,
      pageSize
    });
  });

  it('[Featured Playlists] Set Error', () => {
    const error: HttpErrorResponse = new HttpErrorResponse({error: 'Some error message'});
    action = fromStore.setError({error});
    result = fromStore.featuredPlaylistsReducer(fromStore.initialState, action);

    expect(result).toEqual({
      ...fromStore.initialState,
      error
    });
  });

  it('[Featured Playlists] Set Featured Playlists Filter Text', () => {
    const filterText = 'Some new test filter text';
    action = fromStore.setFeaturedPlaylistFilterText({filterText});
    result = fromStore.featuredPlaylistsReducer(fromStore.initialState, action);

    expect(result).toEqual({
      ...fromStore.initialState,
      filterText
    });
  });
});
