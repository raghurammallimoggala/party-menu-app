import "./index.css";
function Filters({
    activeCategory,
    onCategoryChange,
    searchTerm,
    onSearchChange,
    vegOnly,
    onVegOnlyChange}){
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
            <div className="veg-toggle">
                <label>
                    <input 
                    type="checkbox"
                    checked={vegOnly}
                    onChange={(e)=>onVegOnlyChange(e.target.checked)}
                    />veg Only
                </label>
            </div>
        </div>

    )
    
}
export default Filters;