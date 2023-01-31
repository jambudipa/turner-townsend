import { TestBed } from '@angular/core/testing';

import { FeaturedPlaylistsService } from './featured-playlists.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import * as mocks from '../../../mocks/mocks';

describe('FeaturedPlaylistsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: FeaturedPlaylistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FeaturedPlaylistsService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(FeaturedPlaylistsService);
  });

  describe('#getFeaturedPlaylists', () => {
    const apiUrl = 'https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json';

    it('should return the Featured Playlists from an HTTP call', () => {
      service.getFeaturedPlaylists().subscribe(mappedJson =>
        expect(mappedJson).toEqual(mocks.featuredPlayLists)
      );

      const req = httpTestingController.expectOne(apiUrl);

      expect(req.request.method).toEqual('GET');
      req.flush({featuredPlaylists: mocks.featuredPlayLists});

      httpTestingController.verify();
    });
  });
});
