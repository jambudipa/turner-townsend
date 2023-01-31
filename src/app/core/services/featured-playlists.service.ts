import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { FeaturedPlaylists, FeaturedPlaylistsHttp } from '../../models';

@Injectable()
export class FeaturedPlaylistsService {

  constructor(private http: HttpClient) {
  }

  getFeaturedPlaylists(): Observable<FeaturedPlaylists> {
    return this.http.get<FeaturedPlaylistsHttp>(environment.config.featuredPlaylistsUrl)
    .pipe(
      map((featuredPlaylistsHttp: FeaturedPlaylistsHttp) => featuredPlaylistsHttp.featuredPlaylists)
    );
  }

}
