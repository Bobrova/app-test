import { createSelector } from 'reselect';

export const templatesSelector = createSelector(
  state => state,
  state => state.templates.templates
);

export const templateSelector = createSelector(
  state => state,
  state => state.templates.template
);

export const templateResponseSelector = createSelector(
  state => state,
  state => state.templates.responseTemplate
);
