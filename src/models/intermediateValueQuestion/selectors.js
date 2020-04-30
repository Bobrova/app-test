import { createSelector } from 'reselect';

export const filterGallerySelector = createSelector(
  state => state,
  state => state.filter.filterGallery,
);
