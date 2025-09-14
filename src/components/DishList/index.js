import DishCard from '../DishCard';
import './index.css';

const DishList = props => { 
  const {dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients } = props
  console.log(dishes)
  return (
    <div className="dish-list">
      {dishes.length === 0 && <p className="empty-msg">No dishes found.</p>}
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          isSelected={selectedDishes.includes(dish.id)}
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  )
}

export default DishList;
