import { createSelector } from 'reselect';

export const memesSelector = createSelector(
  state => state,
  state => state.memes.memes
);

export const memeSelector = createSelector(
  state => state,
  state => state.memes.meme
);

export const memeResponseSelector = createSelector(
  state => state,
  state => state.memes.postMemeResponse
);

export const shareResponseSelector = createSelector(
  state => state,
  state => state.memes.responsePostShare
);

export const deleteResponseSelector = createSelector(
  state => state,
  state => state.memes.deleteMemeResponse
);
