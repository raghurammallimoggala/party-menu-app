export const dishes = [
  {
    "id": 1,
    "name": "Kadhai Paneer",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": `${process.env.PUBLIC_URL}/Kadhai Paneer.jpg`,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onion", "quantity": "2 large" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Tomato Puree", "quantity": "1 cup" }
    ]
  },
  {
    "id": 2,
    "name": "Chicken Biryani",
    "description": "Aromatic basmati rice cooked with marinated chicken and Indian spices.",
    "image": `${process.env.PUBLIC_URL}/Chicken Wings.jpg`,
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Chicken", "quantity": "500g" },
      { "name": "Basmati Rice", "quantity": "2 cups" },
      { "name": "Onion", "quantity": "3 large" },
      { "name": "Spices", "quantity": "mixed" }
    ]
  },
  {
    "id": 3,
    "name": "Paneer Tikka",
    "description": "Marinated paneer cubes grilled to perfection with smoky flavors.",
    "image": `${process.env.PUBLIC_URL}/Paneer Tikka.jpeg`,
    "mealType": "STARTER",
    "type": "VEG",
    "ingredients": [
      { "name": "Paneer", "quantity": "250g" },
      { "name": "Yogurt", "quantity": "1 cup" },
      { "name": "Spices", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 4,
    "name": "Chicken Tandoori",
    "description": "Juicy chicken legs marinated in yogurt and spices, cooked in tandoor.",
    "image": `${process.env.PUBLIC_URL}/Chicken Tandoori.jpeg`,
    "mealType": "STARTER",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Chicken Legs", "quantity": "4 pieces" },
      { "name": "Yogurt", "quantity": "1 cup" },
      { "name": "Spices", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 5,
    "name": "Butter Naan",
    "description": "Soft Indian bread baked in tandoor and topped with butter.",
    "image": `${process.env.PUBLIC_URL}/Butter Naan.jpg`,
    "mealType": "SIDES",
    "type": "VEG",
    "ingredients": [
      { "name": "Flour", "quantity": "2 cups" },
      { "name": "Butter", "quantity": "2 tbsp" },
      { "name": "Yogurt", "quantity": "3 tbsp" }
    ]
  },
  {
    "id": 6,
    "name": "Gulab Jamun",
    "description": "Sweet fried dumplings soaked in sugar syrup.",
    "image": `${process.env.PUBLIC_URL}/Gulab Jamun.jpeg`,
    "mealType": "DESSERT",
    "type": "VEG",
    "ingredients": [
      { "name": "Khoya", "quantity": "200g" },
      { "name": "Sugar Syrup", "quantity": "2 cups" },
      { "name": "Cardamom", "quantity": "1 tsp" }
    ]
  },
  {
    "id": 7,
    "name": "Mutton Curry",
    "description": "Fresh fish cooked in tangy and spicy curry sauce.",
    "image": `${process.env.PUBLIC_URL}/Mutton Curry.jpeg`,
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "ingredients": [
      { "name": "Mutton", "quantity": "500g" },
      { "name": "Coconut Milk", "quantity": "1 cup" },
      { "name": "Onion", "quantity": "2 medium" },
      { "name": "Spices", "quantity": "to taste" }
    ]
  },
  {
    "id": 8,
    "name": "Ice Cream Sundae",
    "description": "Chilled vanilla ice cream topped with chocolate syrup and nuts.",
    "image": `${process.env.PUBLIC_URL}/Ice Cream.jpg`,
    "mealType": "DESSERT",
    "type": "VEG",
    "ingredients": [
      { "name": "Vanilla Ice Cream", "quantity": "2 scoops" },
      { "name": "Chocolate Syrup", "quantity": "2 tbsp" },
      { "name": "Nuts", "quantity": "handful" }
    ]
  }
];
export default dishes;