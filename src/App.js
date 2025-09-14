import React, { useState } from 'react';
import Filters from './components/Filters';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';
import dishes from './data/mockdishes';
import './App.css';


const categories = [
  { name: "STARTER", display: "Starters" },
  { name: "MAIN COURSE", display: "Main Course" },
  { name: "DESSERT", display: "Desserts" },
  { name: "SIDES", display: "Sides" }
];


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('MAIN COURSE');
  const [searchword, setSearchword] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isingredientListOpen, setingredientListOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  const categoryCounts = {};
  categories.forEach(cat => {
    categoryCounts[cat.name] = dishes.filter(d => d.mealType === cat.name).length;
  });

  const filteredDishes = dishes.filter((dish) => {
    const matchCategory = dish.mealType === selectedCategory;
    const matchSearch =
      dish.name.toLowerCase().includes(searchword.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchword.toLowerCase());
    const matchVeg = vegOnly ? dish.type.toLowerCase() === 'veg' : true;
    return matchCategory && matchSearch && matchVeg;
  });

  const handleAddDish = (id) => {
    if (!selectedDishes.includes(id)) {
      setSelectedDishes([...selectedDishes, id]);
    }
  };

  const handleRemoveDish = (id) => {
    setSelectedDishes(selectedDishes.filter((dishId) => dishId !== id));
  };

  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
    setingredientListOpen(true);
  };

  const handleCloseModal = () => {
    setingredientListOpen(false);
    setCurrentDish(null);
  };

  return (
    <div className="app-container">
      <h1 className='party-menu-title'>Party Menu Selection</h1>

      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchWord={searchword}
        onSearchChange={setSearchword}
        vegOnly={vegOnly}
        onVegOnlyChange={setVegOnly}
        categories={categories}
        categoryCounts={categoryCounts}
      />

      <DishList
        dishes={filteredDishes}
        selectedDishes={selectedDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        onViewIngredients={handleViewIngredients}
      />

      <div className="summary-container">
        <h1 className='ordered-dishes'>Ordered Dishes {selectedDishes.length}</h1>
        <ul className='dishes-list'>
          {selectedDishes.length === 0 && <p className='no-dishes-text'>No dishes selected.</p>}
          {selectedDishes.map((id) => {
            const dish = dishes.find((eachDish) => eachDish.id === id);
            return <li key={id}>{dish?.name || "Unknown Dish"}</li>;
          })}
        </ul>
      </div>

      {isingredientListOpen && (
        <IngredientModal dish={currentDish} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
