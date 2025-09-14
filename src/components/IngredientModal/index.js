import React from 'react';
import './index.css';

const IngredientModal = props => {
  const { dish, onClose } = props 
  
  if (!dish) return null;

  return (
    <div className="ingredient-container" onClick={onClose}>
      <div className="ingredient-content" onClick={(event) => event.stopPropagation()}>
        <h1 className='item-title'>{dish.name} - Ingredients</h1>
        <p className='description'>{dish.description}</p>
        <ul className="ingredient-list">
          {dish.ingredients && dish.ingredients.length > 0 ? (
            dish.ingredients.map((ingredient, indx) => (
              <li key={indx}>
                {ingredient.name} - {ingredient.quantity}
              </li>
            ))
          ) : (
            <li className='no-list-text'>No ingredient information available.</li>
          )}
        </ul>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default IngredientModal;
