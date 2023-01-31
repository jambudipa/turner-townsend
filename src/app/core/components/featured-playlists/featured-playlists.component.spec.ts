import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { Store } from '@ngrx/store';

import { FeaturedPlaylistsComponent } from './featured-playlists.component';
import { FilterComponent } from '../../presenters/filter/filter.component';
import * as fromStore from '../../store';
import { FeaturedPlaylistsPresenterComponent } from '../../presenters/featured-playlists-presenter/featured-playlists-presenter.component';
import { routes } from '../../../app-routing.module';
import { MaterialModule } from '../../../material/material.module';

describe('FeaturedPlaylistsComponent', () => {

  const error = new HttpErrorResponse({error: 'Some error'});

  let component: FeaturedPlaylistsComponent;
  let fixture: ComponentFixture<FeaturedPlaylistsComponent>;
  let store: MockStore<fromStore.AppState>;
  let router: Router;
  let matSnackBar: MatSnackBar;
  let setError;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeaturedPlaylistsComponent,
        FeaturedPlaylistsPresenterComponent,
        FilterComponent
      ],
      imports: [
        FormsModule,
        MaterialModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        provideMockStore({
          initialState: {
            featuredPlaylistsState: fromStore.initialState,
            router: {}
          }
        })
      ]
    })
    .compileComponents();

    router = TestBed.get<Router>(Router);
    store = TestBed.get<Store<fromStore.AppState>>(Store);
    matSnackBar = TestBed.get<MatSnackBar>(MatSnackBar);
    setError = store.overrideSelector(fromStore.selectError, error);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should dispatch a getFeaturedPlaylists() action', () => {
      spyOn(store, 'dispatch');

      component.ngOnInit();

      expect(store.dispatch).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toHaveBeenCalledWith(fromStore.getFeaturedPlaylists());
    });

    it('should dispatch a getFeaturedPlaylists() action on error', () => {
        const spy = spyOn(store, 'dispatch').and.callThrough();

        component.ngOnInit();
        store.dispatch(fromStore.setError({error}));

        expect(spy).toHaveBeenCalledTimes(2);
        expect(spy.calls.allArgs()).toEqual([
          [fromStore.getFeaturedPlaylists()],
          [fromStore.setError({error})]
        ]);
      }
    );

    it('should call MatSnackBar.open() on error', () => {
      spyOn(matSnackBar, 'open').and.callThrough();

      component.ngOnInit();
      store.dispatch(fromStore.setError({error}));

      expect(matSnackBar.open).toHaveBeenCalledTimes(1);
      expect(matSnackBar.open).toHaveBeenCalledWith(`Error: Some error`,
        'Try again',
        {duration: 5000}
      );
    });
  });

  describe('#onPage', () => {
    const pageEvent = {pageSize: 25, pageIndex: 2};

    it('should dispatch a setPageSize() action with the new page size', () => {
      spyOn(store, 'dispatch');
      component.onPage(pageEvent);
      expect(store.dispatch).toHaveBeenCalledWith(fromStore.setPageSize({pageSize: pageEvent.pageSize}));
    });

    it('should navigate to the new page of Featured Playlists', () => {
      spyOn(router, 'navigate');
      component.onPage(pageEvent);
      expect(router.navigate).toHaveBeenCalledWith([pageEvent.pageIndex]);
    });
  });

  describe('#onFilterTextChanged', () => {
    const filterText = 'Some filter text';

    it('should navigate to the first page of Featured Playlists', () => {
      spyOn(router, 'navigate');
      component.onFilterTextChanged(filterText);
      expect(router.navigate).toHaveBeenCalledWith([0]);
    });

    it('should dispatch a setFeaturedPlaylistFilterText() action', () => {
      spyOn(store, 'dispatch');
      component.onFilterTextChanged(filterText);
      expect(store.dispatch).toHaveBeenCalledWith(fromStore.setFeaturedPlaylistFilterText({filterText}));
    });
  });

});
