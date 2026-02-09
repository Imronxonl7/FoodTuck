export interface RecipesType {
    caloriesPerServing: number;
  cookTimeMinutes: number;
  cuisine: string;              // masalan: "Italian", "Uzbek", "Japanese"...
  difficulty: number;           // 1 = Easy, 2 = Medium, 3 = Hard deb qo‘llash mumkin
  id: string | number;          // ba'zan string, ba'zan number bo‘ladi
  image: string;                // URL manzili
  ingredients: string[];        // har bir ingredient alohida string
  instructions: string[];       // har bir qadam alohida string
  mealType: string;             // "Dinner", "Breakfast", "Dessert"...
  name: string;                 // "Margherita Pizza", "Palov" va hokazo
  prepTimeMinutes: number;
  rating: number;               // 4.6, 5.0 ...
  reviewCount: number;
  servings: number;
  tags: string[];               // ["Pizza", "Italian", "Vegetarian", ...]
  userId: number;
}