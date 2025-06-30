import { createSelector } from 'reselect';

const selectCategories = state => state.categories;

export const selectCategoryById = categoryId =>
  createSelector([selectCategories], categories =>
    categories.find(category => category.id === categoryId)
  );

export const selectAllCategories = createSelector([selectCategories], categories => categories);
