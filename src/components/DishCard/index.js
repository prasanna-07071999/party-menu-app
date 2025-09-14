import React from 'react';
import './index.css';

const DishCard = props => {
  const { dish, onAddDish, onRemoveDish, isSelected, onViewIngredients } = props
  return (
    <div className="dish-card-container">
      {dish.image ? (
        <img src={dish.image} alt={dish.name} className="dish-image" />
      ) : (
        <div className="dish-image image-placeholder">No Image</div>
      )}
      <h1 className="dish-name">{dish.name}</h1>
      <p className="dish-description">{dish.description}</p>

      <div className="dish-actions-container">
        <button
          className={`add-remove-btn ${isSelected ? 'add-remove-btn-remove' : 'add-remove-btn-add'}`}
          onClick={() => (isSelected ? onRemoveDish(dish.id) : onAddDish(dish.id))}
        >
          {isSelected ? 'Remove' : 'Add'}
        </button>
        <button className="ingredients-button" onClick={() => onViewIngredients(dish)}>
          Ingredients
        </button>
      </div>
    </div>
  );
}

export default DishCard;
