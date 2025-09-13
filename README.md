# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### party-menu-app project:
    npx-create-react-app party-menu-app 
    mkdir party-menu-app 
    cd party-menu-app 
    npm start 
### src:
    components:
              DishCard 
              DishList
              Filters
              IngredientModal 
    data:
        mockDishes.js
### use styles:
   css 
### use dishes dtata:
export const dishes = [
  {
    "id": 1,
    "name": "Kadhai Paneer",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "Kadhai Paneer.jpg",
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
    "image": "Chicken Wings.jpg",
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
    "image": "Paneer Tikka.jpeg",
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
    "image": "Chicken Tandoori.jpeg",
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
    "image": "Butter Naan.jpg",
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
    "image": "Gulab Jamun.jpeg",
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
    "image": "Mutton Curry.jpeg",
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
    "image": "Ice Cream.jpg",
    "mealType": "DESSERT",
    "type": "VEG",
    "ingredients": [
      { "name": "Vanilla Ice Cream", "quantity": "2 scoops" },
      { "name": "Chocolate Syrup", "quantity": "2 tbsp" },
      { "name": "Nuts", "quantity": "handful" }
    ]
  }
];