import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCategories } from './categorySelectors';

const CategorySelector = ({ selectedCategoryId, onChange }) => {
  const categories = useSelector(selectAllCategories);

  return (
    <select
      className="form-select"
      value={selectedCategoryId}
      onChange={e => onChange(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
