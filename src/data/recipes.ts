import { Recipe } from "@/components/RecipeCard";
import butterChickenImg from "@/assets/butter-chicken.jpg";
import biryaniImg from "@/assets/biryani.jpg";
import dalCurryImg from "@/assets/dal-curry.jpg";
import naanImg from "@/assets/naan.jpg";
import samosasImg from "@/assets/samosas.jpg";
import palakPaneerImg from "@/assets/palak-paneer.jpg";

export const RECIPES: Recipe[] = [
  {
    id: "butter-chicken",
    name: "Butter Chicken (Murgh Makhani)",
    image: butterChickenImg,
    cookTime: "45 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Creamy, rich, and aromatic chicken curry with tomatoes, butter, and spices. A beloved North Indian classic.",
    ingredients: [
      "Chicken", "Butter", "Onion", "Tomato", "Garlic", "Ginger", "Garam Masala", 
      "Cumin", "Coriander", "Turmeric", "Chili Powder", "Yogurt", "Cream", 
      "Salt", "Sugar", "Bay Leaves", "Cardamom", "Cinnamon", "Cilantro"
    ],
    instructions: [
      "Marinate chicken pieces in yogurt, ginger-garlic paste, and spices for 30 minutes.",
      "Heat butter in a pan and cook marinated chicken until golden. Set aside.",
      "In the same pan, sauté onions until golden, add tomatoes and cook until soft.",
      "Add spices and cook for 2 minutes until fragrant.",
      "Blend the mixture to a smooth paste and strain back to the pan.",
      "Add cooked chicken, cream, and simmer for 10 minutes.",
      "Garnish with cilantro and serve hot with naan or rice."
    ]
  },
  {
    id: "chicken-biryani",
    name: "Chicken Biryani",
    image: biryaniImg,
    cookTime: "90 mins",
    servings: 6,
    difficulty: "Hard",
    description: "Fragrant basmati rice layered with spiced chicken, fried onions, and aromatic herbs. The crown jewel of Mughlai cuisine.",
    ingredients: [
      "Chicken", "Basmati Rice", "Onion", "Yogurt", "Ginger", "Garlic", 
      "Mint", "Cilantro", "Saffron", "Ghee", "Bay Leaves", "Cardamom", 
      "Cinnamon", "Cloves", "Cumin", "Coriander", "Chili Powder", "Turmeric", 
      "Garam Masala", "Salt", "Cashews", "Almonds"
    ],
    instructions: [
      "Soak basmati rice for 30 minutes, then parboil with whole spices.",
      "Marinate chicken with yogurt, ginger-garlic paste, and spices for 1 hour.",
      "Deep fry onions until golden and crispy. Set aside.",
      "Cook marinated chicken until 70% done.",
      "Soak saffron in warm milk.",
      "Layer rice and chicken alternately, sprinkle fried onions, herbs, and saffron milk.",
      "Cover and cook on dum (slow cooking) for 45 minutes.",
      "Let it rest for 10 minutes before serving."
    ]
  },
  {
    id: "dal-tadka",
    name: "Dal Tadka",
    image: dalCurryImg,
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Easy",
    description: "Comforting yellow lentil curry tempered with aromatic spices. A staple in every Indian household.",
    ingredients: [
      "Lentils", "Onion", "Tomato", "Garlic", "Ginger", "Green Chilies", 
      "Turmeric", "Cumin", "Mustard Seeds", "Asafoetida", "Curry Leaves", 
      "Coriander", "Chili Powder", "Ghee", "Oil", "Salt", "Cilantro"
    ],
    instructions: [
      "Wash and boil lentils with turmeric and salt until soft and mushy.",
      "Heat ghee in a pan for tempering (tadka).",
      "Add mustard seeds, cumin seeds, and let them splutter.",
      "Add curry leaves, garlic, ginger, and green chilies.",
      "Add onions and sauté until golden brown.",
      "Add tomatoes and cook until they break down.",
      "Add the tempering to cooked dal and simmer for 5 minutes.",
      "Garnish with fresh cilantro and serve with rice or roti."
    ]
  },
  {
    id: "palak-paneer",
    name: "Palak Paneer",
    image: palakPaneerImg,
    cookTime: "35 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Creamy spinach curry with cubes of fresh cottage cheese. A nutritious and delicious North Indian favorite.",
    ingredients: [
      "Spinach", "Paneer", "Onion", "Tomato", "Garlic", "Ginger", 
      "Green Chilies", "Cumin", "Coriander", "Garam Masala", "Turmeric", 
      "Cream", "Ghee", "Oil", "Salt", "Cilantro"
    ],
    instructions: [
      "Blanch spinach leaves in boiling water for 2 minutes, then blend to a smooth puree.",
      "Cut paneer into cubes and lightly fry until golden. Set aside.",
      "Heat ghee and sauté onions until golden brown.",
      "Add ginger-garlic paste and green chilies, cook for 1 minute.",
      "Add tomatoes and cook until soft and mushy.",
      "Add spices and cook for 2 minutes.",
      "Add spinach puree and simmer for 10 minutes.",
      "Add paneer cubes and cream, cook for 5 minutes. Serve hot."
    ]
  },
  {
    id: "samosas",
    name: "Samosas",
    image: samosasImg,
    cookTime: "60 mins",
    servings: 6,
    difficulty: "Medium",
    description: "Crispy triangular pastries filled with spiced potatoes and peas. Perfect as a snack or appetizer.",
    ingredients: [
      "Potato", "Peas", "Onion", "Ginger", "Green Chilies", "Cumin", 
      "Coriander", "Garam Masala", "Turmeric", "Chili Powder", "Cilantro", 
      "Oil", "Salt", "Flour", "Ghee"
    ],
    instructions: [
      "Make dough with flour, ghee, and water. Rest for 30 minutes.",
      "Boil potatoes until tender, then mash coarsely.",
      "Heat oil and add cumin seeds, ginger, and green chilies.",
      "Add onions and sauté until translucent.",
      "Add mashed potatoes, peas, and all spices. Mix well and cool.",
      "Roll dough into circles, cut in half, and form cones.",
      "Fill with potato mixture, seal edges with water.",
      "Deep fry until golden brown and crispy. Serve with chutney."
    ]
  },
  {
    id: "garlic-naan",
    name: "Garlic Naan",
    image: naanImg,
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Easy",
    description: "Soft, pillowy Indian bread infused with garlic and herbs. Perfect companion to any curry.",
    ingredients: [
      "Flour", "Yogurt", "Garlic", "Ghee", "Baking Powder", "Salt", 
      "Sugar", "Cilantro", "Oil"
    ],
    instructions: [
      "Mix flour, baking powder, salt, and sugar in a bowl.",
      "Add yogurt and knead into a soft dough. Rest for 2 hours.",
      "Mince garlic and mix with chopped cilantro.",
      "Divide dough into portions and roll into oval shapes.",
      "Brush with garlic-cilantro mixture.",
      "Cook on a hot tawa or pan until puffed and spotted.",
      "Brush with ghee and serve immediately while hot."
    ]
  }
];

export function getMatchingRecipes(selectedIngredients: string[]): Recipe[] {
  if (selectedIngredients.length === 0) return RECIPES;
  
  return RECIPES
    .map(recipe => ({
      ...recipe,
      matchCount: recipe.ingredients.filter(ingredient =>
        selectedIngredients.some(selected =>
          selected.toLowerCase() === ingredient.toLowerCase()
        )
      ).length
    }))
    .filter(recipe => recipe.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount);
}