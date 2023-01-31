import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { filter, switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import * as fromStore from '../../store';
import { FeaturedPlaylists } from '../../../models';

@Component({
  selector: 'tt-featured-playlists',
  templateUrl: './featured-playlists.component.html'
})
export class FeaturedPlaylistsComponent implements OnInit, OnDestroy {

  pageSizeOptions: number[] = [5, 10, 25, 50];

  public filteredFeaturedPlaylists$: Observable<FeaturedPlaylists> = this.store.pipe(select(fromStore.selectFilteredFeaturedPlaylists));
  public filteredPagedFeaturedPlaylists$: Observable<FeaturedPlaylists> = this.store.pipe(
    select(fromStore.selectFilteredPagedFeaturedPlaylists)
  );
  public featuredPlaylistsLoading$: Observable<boolean> = this.store.pipe(select(fromStore.selectFeaturedPlaylistsLoading));
  public featuredPlaylistsLoaded$: Observable<boolean> = this.store.pipe(select(fromStore.selectFeaturedPlaylistsLoaded));
  public pageSize$: Observable<number> = this.store.pipe(select(fromStore.selectPageSize));
  public pageIndex$: Observable<string> = this.store.pipe(select(fromStore.selectRoutePageIndex));
  public filterText$: Observable<string> = this.store.pipe(select(fromStore.selectFilterText));

  private subscription: Subscription;

  constructor(
    protected store: Store<fromStore.AppState>,
    protected router: Router,
    public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.store.dispatch(fromStore.getFeaturedPlaylists());

    this.subscription = this.store.pipe(
      select(fromStore.selectError),
      filter(err => !!err),
      switchMap((err) => this.snackBar.open(
        `Error: ${err.error}`,
        'Try again',
        {duration: 5000}).afterDismissed())
    ).subscribe(() => this.store.dispatch(fromStore.getFeaturedPlaylists()));
  }

  onPage(pageEvent) {
    this.store.dispatch(fromStore.setPageSize({pageSize: pageEvent.pageSize}));
    this.router.navigate([pageEvent.pageIndex]);
  }

  onFilterTextChanged(filterText: string) {
    this.router.navigate([0]);
    this.store.dispatch(fromStore.setFeaturedPlaylistFilterText({filterText}));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
