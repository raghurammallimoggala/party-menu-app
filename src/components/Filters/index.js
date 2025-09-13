import "./index.css";
function Filters({
    activeCategory,
    onCategoryChange,
    searchTerm,
    onSearchChange,
    veg,
    nonVeg,
    onVegChange,
    onNonVegChange}){
        const category=["ALL","STARTER", "MAIN COURSE", "DESSERT", "SIDES"]
    return(
        <div className="filters-container">
            <div className="category-tab">                  
                {category.map((cat)=>(
                    <button key={cat} type="button" 
                    className={`tab-btn ${activeCategory === cat ? "active" : ""}`} 
                    onClick={()=>onCategoryChange(cat)}>{cat}</button>
                ))}
            </div>
            <div className="search-bar">
                <input
                type="text"
                placeholder="Search dishe"
                value={searchTerm}
                onChange={(e)=>onSearchChange(e.target.value)}/>
            </div>
            <div className="toggle">
                <label>
                    <input 
                    type="checkbox"
                    checked={veg}
                    onChange={(e)=>onVegChange(e.target.checked)}
                    />Veg
                </label>
            </div>
            <div className="toggle">
                <label>
                    <input 
                    type="checkbox"
                    checked={nonVeg}
                    onChange={(e)=>onNonVegChange(e.target.checked)}
                    />NonVeg 
                </label>
            </div>
        </div>

    )
    
}
export default Filters;