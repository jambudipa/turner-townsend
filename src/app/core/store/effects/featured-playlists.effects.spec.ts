import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';

import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, throwError } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';

import * as fromActions from '../actions';
import { FeaturedPlaylistsEffects } from './featured-playlists.effects';
import { FeaturedPlaylistsService } from '../../services/featured-playlists.service';
import * as mocks from '../../../../mocks/mocks';

describe('FeaturedPlaylistsEffects', () => {
  let actions$: Observable<any>;
  let serviceSpy: jasmine.SpyObj<FeaturedPlaylistsService>;
  let effects: FeaturedPlaylistsEffects;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('FeaturedPlaylistsService', ['getFeaturedPlaylists']);

    TestBed.configureTestingModule({
      providers: [
        FeaturedPlaylistsEffects,
        {provide: FeaturedPlaylistsService, useValue: spy},
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<FeaturedPlaylistsEffects>(FeaturedPlaylistsEffects);
    serviceSpy = TestBed.get<FeaturedPlaylistsService>(FeaturedPlaylistsService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('#getFeaturedPlaylists$ should return getFeaturedPlaylistsSuccess action', () => {
    serviceSpy.getFeaturedPlaylists.and.returnValue(cold(
      '--a|',
      {a: mocks.featuredPlayLists}
    ));

    actions$ = hot('-a-', {
      a: fromActions.getFeaturedPlaylists
    });

    const expected = hot('---a', {
      a: fromActions.getFeaturedPlaylistsSuccess({featuredPlaylists: mocks.featuredPlayLists})
    });

    expect(effects.getFeaturedPlaylists$).toBeObservable(expected);
  });

  it('#getFeaturedPlaylists$ should return setError action on service HTTP failure', () => {
    const error = new HttpErrorResponse({error: 'Some error'});
    serviceSpy.getFeaturedPlaylists.and.returnValue(throwError(error));

    actions$ = hot('-a-', {
      a: fromActions.getFeaturedPlaylists
    });

    const expected = hot('-a', {
      a: fromActions.setError({error})
    });

    expect(effects.getFeaturedPlaylists$).toBeObservable(expected);
  });
});
