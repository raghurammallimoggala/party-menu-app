import {useState} from "react";
import dishes from "./data/mockDishes";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import Filters from "./components/Filters";
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory]=useState("ALL");
  const [searchTerm, setSearchTerm]=useState("");
  const [veg, setVeg]=useState(false);
  const[nonVeg, setNonVeg]=useState(false)
  const [selectedDishes,setSelectedDishes]=useState([]);
  const [isModalOpen, setIsModalOpen]=useState(false);
  const [currentDish, setCurrentDish]=useState(null);
  const [dishCounts, setDishCounts]=useState({ALL: 0,
    STARTER: 0,
    "MAIN COURSE": 0,
    DESSERT: 0,
    SIDES: 0})


  const filteredDishes=dishes.filter((dish)=>{
    const matchesCategory=
    selectedCategory=== "ALL" || dish.mealType === selectedCategory;
    const matchesSearch=dish.name.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesType = true; 
  if (veg && !nonVeg) {
    matchesType = dish.type === "VEG";
  } else if (!veg && nonVeg) {
    matchesType = dish.type === "NON-VEG";
  } else if (!veg && !nonVeg) {
    matchesType = true; 
  }

  return matchesCategory && matchesSearch && matchesType;
  });

  const handleAddDish = (dish) => {
    setDishCounts((prev) => ({
    ...prev,
    [dish.mealType]: prev[dish.mealType] + 1, 
    ALL: prev.ALL + 1,                        
  }));
    setSelectedDishes((prev) => [...prev, dish.id]);
  };

  const handleRemoveDish = (dish) => {
    setDishCounts((prev) => ({
    ...prev,
    [dish.mealType]: prev[dish.mealType] > 0 ? prev[dish.mealType] - 1 : 0,
    ALL: prev.ALL > 0 ? prev.ALL - 1 : 0,
  }));
    setSelectedDishes((prev) => prev.filter((id) => id !== dish.id));
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
      veg={veg}
      onVegChange={setVeg}
      nonVeg={nonVeg}
      onNonVegChange={setNonVeg}
      categoryCount={dishCounts}
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
