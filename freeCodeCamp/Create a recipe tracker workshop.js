const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  ratings: [4, 5, 4, 5],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: "",
  averageRating: null,
};
const recipe2 = {
  name: "Chicken Curry",
  ingredients: [
    "chicken breast",
    "coconut milk",
    "curry powder",
    "onion",
    "garlic",
  ],
  ratings: [4, 5, 5, 5],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: "",
  averageRating: null,
};
const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: "",
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

recipes.push(recipe1, recipe2, recipe3);

const getAverageRating = (rate) =>
  rate.reduce((a, b) => a + b, 0) / rate.length;

const getTotalIngredients = (ing) => ing.length;

const getDifficultyLevel = (time) =>
  time <= 30 ? "Easy" : time <= 60 ? "Medium" : "Hard";

const recipe1AverageRating = getAverageRating(recipe1.ratings);
const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe1.averageRating = recipe1AverageRating;
recipe1.totalIngredients = recipe1TotalIngredients;
recipe1.difficultyLevel = recipe1DifficultyLevel;

console.log(recipe1);

const recipe2AverageRating = getAverageRating(recipe2.ratings);
const recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients);
const recipe2DifficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe2.averageRating = recipe2AverageRating;
recipe2.totalIngredients = recipe2TotalIngredients;
recipe2.difficultyLevel = recipe2DifficultyLevel;

console.log(recipe2);

const recipe3AverageRating = getAverageRating(recipe3.ratings);
const recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);
const recipe3DifficultyLevel = getDifficultyLevel(recipe3.cookingTime);

recipe3.averageRating = recipe3AverageRating;
recipe3.totalIngredients = recipe3TotalIngredients;
recipe3.difficultyLevel = recipe3DifficultyLevel;

console.log(recipe3);

console.log(recipes);
