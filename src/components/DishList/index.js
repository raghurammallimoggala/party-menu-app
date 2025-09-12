import DishCard from "../DishCard";
import "./index.css";
function DishList({dishes,
    onAddDish,
    onRemoveDish,
    selectedDishes,
    onViewIngredients}){

    if (dishes.length === 0) {
        return <p className="no-dishes">No dishes found</p>;
    }
    return(
        <div className="dish-list-container">
            {dishes.map((dish)=>(
                <DishCard
                key={dish.id}
                dish={dish}
                onAddDish={onAddDish}
                onRemoveDish={onRemoveDish}
                onViewIngredients={onViewIngredients}
                isSelected={selectedDishes.includes(dish.id)}/>
            ))}
        </div>

    )

}
export default DishList;