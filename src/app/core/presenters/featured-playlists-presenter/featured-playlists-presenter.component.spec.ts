import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPlaylistsPresenterComponent } from './featured-playlists-presenter.component';
import { MaterialModule } from '../../../material/material.module';

describe('FeaturedPlaylistsPresenterComponent', () => {
  let component: FeaturedPlaylistsPresenterComponent;
  let fixture: ComponentFixture<FeaturedPlaylistsPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedPlaylistsPresenterComponent],
      imports: [MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPlaylistsPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onPage', () => {
    const pageEvent = {pageSize: 25, pageIndex: 2};

    it('should emit a page event to the page @Output()', () => {
      component.page.subscribe(value => expect(value).toEqual(pageEvent));
      component.onPage(pageEvent);
    });
  });
});
