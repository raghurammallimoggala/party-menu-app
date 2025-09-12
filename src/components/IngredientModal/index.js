import "./index.css";
function IngredientModal({dish, onClose}){
    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">{dish.name}</h2>
                <p className="modal-description">{dish.description}</p>
                <div className="ingredient-container">
                <h3>Ingredients:</h3>
                <div className="ingredient-item">
                <ul className="ingredient-list">
                    {dish.ingredients.map((ing, index)=>(
                        <li key={index}>{ing}</li>
                    ))}
                </ul>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
            </div>
          </div>
        </div>

    )
}
export default IngredientModal;