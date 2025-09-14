import React from 'react';
import './index.css';

const Filters = props => {
  const { activeCategory, onCategoryChange, searchWord, onSearchChange, vegOnly, onVegOnlyChange, categoryCounts, categories} = props

  const onChangeInputField = event => {
    onSearchChange(event.target.value)
  }

  const onChangeCheckBoxInput = event => {
    onVegOnlyChange(event.target.checked)
  }
  return (
    <div className="filters-component">
      <div className="categories-container">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category.name)}
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
          >
            {category.display} {categoryCounts[category.name] ?? 0}
          </button>
        ))}
      </div>
      <div className="search-veg-container">
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchWord}
          onChange={onChangeInputField}
          className="search-input"
        />
        <label className="only-veg-label">Veg Only</label>
        <input
            type="checkbox"
            checked={vegOnly}
            onChange={onChangeCheckBoxInput}
            className='check-box-style'
          />
      </div>
    </div>
  )
}

export default Filters;
