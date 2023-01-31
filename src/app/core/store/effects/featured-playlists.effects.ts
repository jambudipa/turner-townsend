import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromActions from '../actions';
import { FeaturedPlaylistsService } from '../../services/featured-playlists.service';
import { FeaturedPlaylists } from '../../../models';


@Injectable()
export class FeaturedPlaylistsEffects {

  getFeaturedPlaylists$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.getFeaturedPlaylists),
    switchMap(() => this.featuredPlaylistsService.getFeaturedPlaylists()
      .pipe(
        map((featuredPlaylists: FeaturedPlaylists) => fromActions.getFeaturedPlaylistsSuccess({featuredPlaylists})),
        catchError(error => of(fromActions.setError({error})))
      )
    )
  ));

  constructor(private actions$: Actions, private featuredPlaylistsService: FeaturedPlaylistsService) {
  }

}
