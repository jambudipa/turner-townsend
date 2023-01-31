import * as fromSelectors from './featured-playlists.selectors';
import * as mocks from '../../../../mocks/mocks';

describe('Featured Playlists selectors', () => {
  it('#selectFeaturedPlaylists should return featured playlists', () => {
    expect(fromSelectors.selectFeaturedPlaylists.projector(mocks.featuredPlaylistsState)).toEqual(mocks.featuredPlayLists);
  });

  it('#selectFeaturedPlaylistsLoading should return loading state', () => {
    expect(fromSelectors.selectFeaturedPlaylistsLoading.projector(mocks.featuredPlaylistsState))
    .toBe(mocks.featuredPlaylistsState.featuredPlaylistsLoading);
  });

  it('#selectFeaturedPlaylistsLoaded should return the loaded state', () => {
    expect(fromSelectors.selectFeaturedPlaylistsLoaded.projector(mocks.featuredPlaylistsState))
    .toBe(mocks.featuredPlaylistsState.featuredPlaylistsLoaded);
  });

  it('#selectPageSize should return the page size', () => {
    expect(fromSelectors.selectPageSize.projector(mocks.featuredPlaylistsState))
    .toBe(mocks.featuredPlaylistsState.pageSize);
  });

  it('#selectFilterText should return the filter text', () => {
    expect(fromSelectors.selectFilterText.projector(mocks.featuredPlaylistsState))
    .toBe(mocks.featuredPlaylistsState.filterText);
  });

  it('#selectFilteredFeaturedPlaylists should return the filtered playlists', () => {
    expect(fromSelectors.selectFilteredFeaturedPlaylists.projector(
      mocks.featuredPlayLists,
      mocks.featuredPlaylistsState.filterText
    )).toEqual(mocks.filteredFeaturedPlaylists);
  });

  it('#selectFilteredPagedFeaturedPlaylists should return paged filtered featured playlists', () => {
    expect(fromSelectors.selectFilteredPagedFeaturedPlaylists.projector(
      mocks.filteredFeaturedPlaylists,
      1,
      mocks.featuredPlaylistsState.pageSize
    )).toEqual(mocks.filteredPagedFeaturedPlaylists);
  });

  it('#selectError should return the default HttpErrorResponse', () => {
    expect(fromSelectors.selectError.projector(mocks.featuredPlaylistsState))
    .toEqual(mocks.featuredPlaylistsState.error);
  });
});
