import {useState} from "react";
import dishes from "./data/mockDishes";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import Filters from "./components/Filters";
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory]=useState("ALL");
  const [searchTerm, setSearchTerm]=useState("");
  const [vegOnly, setVegOnly]=useState(false);
  const [selectedDishes,setSelectedDishes]=useState([]);
  const [isModalOpen, setIsModalOpen]=useState(false);
  const [currentDish, setCurrentDish]=useState(null);


  const filteredDishes=dishes.filter((dish)=>{
    const matchesCategory=
    selectedCategory=== "ALL" || dish.mealType === selectedCategory;
    const matchesSearch=dish.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesVeg=!vegOnly || dish.isVeg;
    return matchesCategory && matchesSearch && matchesVeg;
  })

  const handleAddDish = (dishId) => {
    if (!selectedDishes.includes(dishId)) {
      setSelectedDishes([...selectedDishes, dishId]);
    }
  };

  const handleRemoveDish = (dishId) => {
    setSelectedDishes(selectedDishes.filter((id) => id !== dishId));
  };
  
const openModal = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentDish(null);
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <h1 className="app-title">Party Menu App</h1>
      <Filters
      activeCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
      vegOnly={vegOnly}
      onVegOnlyChange={setVegOnly}
      />
      <DishList
        dishes={filteredDishes}
        selectedDishes={selectedDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        onViewIngredients={openModal} 
      />
      {isModalOpen && currentDish && (
        <IngredientModal dish={currentDish} onClose={closeModal} />
      )}
    </div>
    
  );
}

export default App;
