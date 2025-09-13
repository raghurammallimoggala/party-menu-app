import "./index.css";

function DishCard({dish,
    onAddDish,
    onRemoveDish,
    isSelected,
    onViewIngredients}){
    return(
        <div className="dish-card">
            <img src={dish.image} alt={dish.name} className="dish-image"/>
            <div className="dish-info">
                <h3 className="dish-name">{dish.name}</h3>
                <p className="dish-category">{dish.mealType}</p>
            </div>
            <div className="dish-actions">
                {isSelected ?(<button className="remove-btn" 
                onClick={()=>onRemoveDish(dish)} 
                aria-label={`Remove ${dish.name}`}>Remove</button>):(
                    <button className="add-btn"
                     onClick={()=>onAddDish(dish)} 
                     aria-label={`Add ${dish.name}`}>Add</button>
                )}
            </div>

            <button className="ingredients-btn" 
            onClick={()=>onViewIngredients(dish)} 
            aria-label={`View ingredients of ${dish.name}`}>Ingredients</button>
        </div>

    )

}
export default DishCard;