import { Recipe } from "@/components/RecipeCard";
import butterChickenImg from "@/assets/butter-chicken.jpg";
import biryaniImg from "@/assets/biryani.jpg";
import dalCurryImg from "@/assets/dal-curry.jpg";
import naanImg from "@/assets/naan.jpg";
import samosasImg from "@/assets/samosas.jpg";
import palakPaneerImg from "@/assets/palak-paneer.jpg";
import alooGobiImg from "@/assets/aloo-gobi.jpg";
import coconutRiceImg from "@/assets/coconut-rice.jpg";
import bainganBhartaImg from "@/assets/baingan-bharta.jpg";
import bhindiMasalaImg from "@/assets/bhindi-masala.jpg";
import rajmaImg from "@/assets/rajma.jpg";
import chickenKormaImg from "@/assets/chicken-korma.jpg";
import sambarImg from "@/assets/sambar.jpg";
import gajarHalwaImg from "@/assets/gajar-halwa.jpg";
import mintChutneyImg from "@/assets/mint-chutney.jpg";
import jeeraRiceImg from "@/assets/jeera-rice.jpg";
import choleBhatureImg from "@/assets/chole-bhature.jpg";
import dosaImg from "@/assets/dosa.jpg";
import mixedVegCurryImg from "@/assets/mixed-veg-curry.jpg";
import fishCurryImg from "@/assets/fish-curry.jpg";
import alooParathaImg from "@/assets/aloo-paratha.jpg";

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
  },
  {
    id: "aloo-gobi",
    name: "Aloo Gobi",
    image: alooGobiImg,
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Easy",
    description: "Classic dry curry with potatoes and cauliflower, seasoned with turmeric and aromatic spices.",
    ingredients: [
      "Potato", "Cauliflower", "Onion", "Tomato", "Garlic", "Ginger", 
      "Green Chilies", "Turmeric", "Cumin", "Coriander", "Garam Masala", 
      "Oil", "Salt", "Cilantro"
    ],
    instructions: [
      "Cut potatoes and cauliflower into medium pieces.",
      "Heat oil and add cumin seeds, let them splutter.",
      "Add ginger, garlic, and green chilies, sauté for 1 minute.",
      "Add onions and cook until translucent.",
      "Add tomatoes and cook until soft.",
      "Add turmeric, coriander, and salt, mix well.",
      "Add potatoes and cauliflower, mix gently.",
      "Cover and cook on low heat for 15-20 minutes until tender.",
      "Garnish with garam masala and cilantro."
    ]
  },
  {
    id: "coconut-rice",
    name: "Coconut Rice",
    image: coconutRiceImg,
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Easy",
    description: "Fragrant South Indian rice dish with fresh coconut, curry leaves, and mustard seeds.",
    ingredients: [
      "Rice", "Coconut", "Mustard Seeds", "Curry Leaves", "Green Chilies", 
      "Ginger", "Cashews", "Oil", "Ghee", "Salt", "Cilantro"
    ],
    instructions: [
      "Cook rice and let it cool completely.",
      "Grate fresh coconut or use desiccated coconut.",
      "Heat oil and ghee in a pan.",
      "Add mustard seeds and let them splutter.",
      "Add curry leaves, green chilies, and ginger.",
      "Add cashews and fry until golden.",
      "Add grated coconut and sauté for 2 minutes.",
      "Add cooked rice and salt, mix gently.",
      "Garnish with cilantro and serve warm."
    ]
  },
  {
    id: "baingan-bharta",
    name: "Baingan Bharta",
    image: bainganBhartaImg,
    cookTime: "40 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Smoky roasted eggplant curry mashed with onions, tomatoes, and aromatic spices.",
    ingredients: [
      "Eggplant", "Onion", "Tomato", "Garlic", "Ginger", "Green Chilies", 
      "Cumin", "Coriander", "Turmeric", "Garam Masala", "Oil", "Salt", "Cilantro"
    ],
    instructions: [
      "Roast eggplant over open flame or in oven until charred and soft.",
      "Peel the skin and mash the pulp, remove any large seeds.",
      "Heat oil and add cumin seeds.",
      "Add ginger-garlic paste and green chilies.",
      "Add onions and sauté until golden brown.",
      "Add tomatoes and cook until soft and mushy.",
      "Add turmeric, coriander, and garam masala.",
      "Add mashed eggplant and cook for 10 minutes.",
      "Garnish with cilantro and serve hot."
    ]
  },
  {
    id: "bhindi-masala",
    name: "Bhindi Masala",
    image: bhindiMasalaImg,
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Easy",
    description: "Spiced okra curry with onions and tomatoes, a popular North Indian vegetable dish.",
    ingredients: [
      "Okra", "Onion", "Tomato", "Garlic", "Ginger", "Green Chilies", 
      "Cumin", "Coriander", "Turmeric", "Chili Powder", "Garam Masala", 
      "Oil", "Salt", "Cilantro"
    ],
    instructions: [
      "Wash and dry okra completely, then cut into 1-inch pieces.",
      "Heat oil in a pan and fry okra until lightly browned. Set aside.",
      "In the same pan, add more oil if needed.",
      "Add cumin seeds and let them splutter.",
      "Add ginger-garlic paste and green chilies.",
      "Add onions and sauté until golden.",
      "Add tomatoes and cook until soft.",
      "Add all spices and cook for 2 minutes.",
      "Add fried okra back to the pan and mix gently.",
      "Cook for 5 minutes and garnish with cilantro."
    ]
  },
  {
    id: "rajma",
    name: "Rajma (Kidney Bean Curry)",
    image: rajmaImg,
    cookTime: "45 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Rich and hearty kidney bean curry in thick tomato gravy, a Punjabi comfort food classic.",
    ingredients: [
      "Beans", "Onion", "Tomato", "Garlic", "Ginger", "Green Chilies", 
      "Cumin", "Coriander", "Turmeric", "Chili Powder", "Garam Masala", 
      "Bay Leaves", "Oil", "Salt", "Cilantro"
    ],
    instructions: [
      "Soak kidney beans overnight, then pressure cook until soft.",
      "Heat oil and add bay leaves and cumin seeds.",
      "Add ginger-garlic paste and green chilies.",
      "Add onions and sauté until golden brown.",
      "Add tomatoes and cook until they break down completely.",
      "Add all spices and cook for 3 minutes.",
      "Add cooked beans with their water.",
      "Simmer for 15-20 minutes until thick and flavorful.",
      "Garnish with cilantro and serve with rice."
    ]
  },
  {
    id: "chicken-korma",
    name: "Chicken Korma",
    image: chickenKormaImg,
    cookTime: "50 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Creamy, aromatic chicken curry with cashews, almonds, and fragrant spices.",
    ingredients: [
      "Chicken", "Onion", "Yogurt", "Cashews", "Almonds", "Garlic", "Ginger", 
      "Cardamom", "Cinnamon", "Cloves", "Bay Leaves", "Cumin", "Coriander", 
      "Turmeric", "Chili Powder", "Garam Masala", "Ghee", "Oil", "Salt", "Cilantro"
    ],
    instructions: [
      "Marinate chicken in yogurt and spices for 30 minutes.",
      "Soak cashews and almonds in warm water for 15 minutes.",
      "Heat ghee and oil, add whole spices and bay leaves.",
      "Add onions and cook until golden brown.",
      "Blend soaked nuts with a little water to make paste.",
      "Add ginger-garlic paste to onions and cook for 1 minute.",
      "Add marinated chicken and cook until browned.",
      "Add nut paste and remaining spices, cook for 10 minutes.",
      "Simmer until chicken is tender and gravy is creamy.",
      "Garnish with cilantro and sliced almonds."
    ]
  },
  {
    id: "sambar",
    name: "Sambar",
    image: sambarImg,
    cookTime: "40 mins",
    servings: 6,
    difficulty: "Medium",
    description: "Traditional South Indian lentil curry with vegetables, tamarind, and aromatic spices.",
    ingredients: [
      "Lentils", "Carrot", "Okra", "Eggplant", "Onion", "Tomato", "Tamarind", 
      "Mustard Seeds", "Fenugreek", "Curry Leaves", "Asafoetida", "Turmeric", 
      "Coriander", "Chili Powder", "Jaggery", "Oil", "Salt", "Cilantro"
    ],
    instructions: [
      "Cook lentils with turmeric until soft and mushy.",
      "Soak tamarind in warm water and extract thick pulp.",
      "Cut vegetables into medium pieces.",
      "Heat oil and add mustard seeds, fenugreek, and curry leaves.",
      "Add asafoetida and vegetables, sauté for 5 minutes.",
      "Add tamarind pulp and bring to boil.",
      "Add cooked lentils, spices, and jaggery.",
      "Simmer until vegetables are tender and flavors blend.",
      "Garnish with cilantro and serve with rice or dosa."
    ]
  },
  {
    id: "gajar-halwa",
    name: "Gajar Halwa",
    image: gajarHalwaImg,
    cookTime: "60 mins",
    servings: 6,
    difficulty: "Medium",
    description: "Rich and indulgent carrot dessert cooked in milk, ghee, and garnished with nuts.",
    ingredients: [
      "Carrot", "Milk", "Sugar", "Ghee", "Cardamom", "Cashews", 
      "Almonds", "Pistachios", "Raisins"
    ],
    instructions: [
      "Grate carrots finely using a grater.",
      "Heat ghee in a heavy-bottomed pan.",
      "Add grated carrots and sauté for 10 minutes.",
      "Add milk and cook on medium heat, stirring frequently.",
      "Continue cooking until milk reduces by half.",
      "Add sugar and cardamom powder, mix well.",
      "Cook until mixture thickens and leaves the pan sides.",
      "Garnish with chopped nuts and serve warm or cold."
    ]
  },
  {
    id: "mint-chutney",
    name: "Mint Chutney",
    image: mintChutneyImg,
    cookTime: "10 mins",
    servings: 4,
    difficulty: "Easy",
    description: "Fresh and zesty mint chutney with cilantro, green chilies, and lime juice.",
    ingredients: [
      "Mint", "Cilantro", "Green Chilies", "Ginger", "Garlic", 
      "Lime", "Salt", "Sugar", "Cumin"
    ],
    instructions: [
      "Wash mint and cilantro leaves thoroughly.",
      "Roughly chop all ingredients.",
      "Add everything to a blender with a little water.",
      "Blend to a smooth paste, adding water as needed.",
      "Taste and adjust salt, sugar, and lime juice.",
      "Transfer to a serving bowl.",
      "Chill for 30 minutes before serving.",
      "Serve with samosas, pakoras, or as a sandwich spread."
    ]
  },
  {
    id: "jeera-rice",
    name: "Jeera Rice",
    image: jeeraRiceImg,
    cookTime: "20 mins",
    servings: 4,
    difficulty: "Easy",
    description: "Fragrant cumin-flavored basmati rice with whole spices, perfect with any curry.",
    ingredients: [
      "Basmati Rice", "Cumin", "Bay Leaves", "Cardamom", "Cinnamon", 
      "Cloves", "Ghee", "Oil", "Salt", "Cilantro"
    ],
    instructions: [
      "Soak basmati rice for 30 minutes, then drain.",
      "Heat ghee and oil in a heavy-bottomed pot.",
      "Add cumin seeds and let them splutter.",
      "Add bay leaves, cardamom, cinnamon, and cloves.",
      "Add drained rice and sauté for 2 minutes.",
      "Add hot water (1.5 times the rice quantity) and salt.",
      "Bring to boil, then reduce heat and cover.",
      "Cook for 15 minutes, then let it rest for 5 minutes.",
      "Garnish with cilantro and serve hot."
    ]
  },
  {
    id: "chole-bhature",
    name: "Chole Bhature",
    image: choleBhatureImg,
    cookTime: "90 mins",
    servings: 4,
    difficulty: "Hard",
    description: "Spicy chickpea curry served with fluffy fried bread, a popular Punjabi combination.",
    ingredients: [
      "Chickpeas", "Flour", "Yogurt", "Onion", "Tomato", "Ginger", "Garlic", 
      "Green Chilies", "Cumin", "Coriander", "Turmeric", "Chili Powder", 
      "Garam Masala", "Bay Leaves", "Baking Powder", "Oil", "Ghee", "Salt", "Cilantro"
    ],
    instructions: [
      "Soak chickpeas overnight, then pressure cook until soft.",
      "For bhature: mix flour, yogurt, baking powder, and salt. Knead and rest for 2 hours.",
      "Heat oil, add bay leaves and cumin seeds.",
      "Add ginger-garlic paste and green chilies.",
      "Add onions, cook until golden brown.",
      "Add tomatoes and all spices, cook until oil separates.",
      "Add cooked chickpeas and simmer for 20 minutes.",
      "Roll bhature and deep fry until puffed and golden.",
      "Serve hot chole with bhature, onions, and pickles."
    ]
  },
  {
    id: "dosa",
    name: "Dosa",
    image: dosaImg,
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Crispy South Indian crepe made from fermented rice and lentil batter, served with chutney.",
    ingredients: [
      "Rice", "Lentils", "Fenugreek", "Salt", "Oil", "Potato", "Onion", 
      "Mustard Seeds", "Curry Leaves", "Green Chilies", "Ginger", "Turmeric"
    ],
    instructions: [
      "Soak rice and lentils separately for 4 hours with fenugreek.",
      "Grind to smooth batter and ferment overnight.",
      "For filling: boil potatoes and mash coarsely.",
      "Heat oil, add mustard seeds and curry leaves.",
      "Add onions, ginger, green chilies, and turmeric.",
      "Add mashed potatoes and mix well.",
      "Heat a non-stick pan and spread batter thinly.",
      "Add filling on one side and fold the dosa.",
      "Serve hot with coconut chutney and sambar."
    ]
  },
  {
    id: "mixed-veg-curry",
    name: "Mixed Vegetable Curry",
    image: mixedVegCurryImg,
    cookTime: "35 mins",
    servings: 4,
    difficulty: "Easy",
    description: "Colorful medley of seasonal vegetables in aromatic spices and tomato gravy.",
    ingredients: [
      "Bell Pepper", "Carrot", "Peas", "Cauliflower", "Potato", "Onion", 
      "Tomato", "Ginger", "Garlic", "Green Chilies", "Cumin", "Coriander", 
      "Turmeric", "Garam Masala", "Oil", "Salt", "Cilantro"
    ],
    instructions: [
      "Cut all vegetables into uniform medium pieces.",
      "Heat oil and add cumin seeds.",
      "Add ginger-garlic paste and green chilies.",
      "Add onions and sauté until translucent.",
      "Add tomatoes and cook until soft.",
      "Add turmeric, coriander, and other spices.",
      "Add hard vegetables first (potato, carrot), cook for 5 minutes.",
      "Add remaining vegetables and a little water.",
      "Cover and cook until all vegetables are tender.",
      "Garnish with garam masala and cilantro."
    ]
  },
  {
    id: "fish-curry",
    name: "Fish Curry",
    image: fishCurryImg,
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Coastal Indian fish curry with coconut milk, curry leaves, and aromatic spices.",
    ingredients: [
      "Fish", "Coconut", "Onion", "Tomato", "Ginger", "Garlic", "Green Chilies", 
      "Curry Leaves", "Mustard Seeds", "Turmeric", "Coriander", "Chili Powder", 
      "Tamarind", "Oil", "Salt", "Cilantro"
    ],
    instructions: [
      "Cut fish into medium pieces and marinate with turmeric and salt.",
      "Extract thick coconut milk from fresh coconut.",
      "Heat oil and add mustard seeds and curry leaves.",
      "Add ginger-garlic paste and green chilies.",
      "Add onions and sauté until golden.",
      "Add tomatoes and cook until soft.",
      "Add spices and cook for 2 minutes.",
      "Add coconut milk and tamarind pulp, bring to boil.",
      "Gently add fish pieces and simmer for 10 minutes.",
      "Garnish with cilantro and serve with rice."
    ]
  },
  {
    id: "aloo-paratha",
    name: "Aloo Paratha",
    image: alooParathaImg,
    cookTime: "40 mins",
    servings: 4,
    difficulty: "Medium",
    description: "Stuffed potato flatbread served hot with butter, yogurt, and pickles.",
    ingredients: [
      "Flour", "Potato", "Onion", "Ginger", "Green Chilies", "Cumin", 
      "Coriander", "Garam Masala", "Chili Powder", "Oil", "Ghee", "Salt", "Cilantro"
    ],
    instructions: [
      "Make soft dough with flour, salt, oil, and water. Rest for 30 minutes.",
      "Boil potatoes until tender, then mash coarsely.",
      "Mix mashed potatoes with onions, ginger, green chilies, and spices.",
      "Divide dough into portions and roll into small circles.",
      "Place potato filling in center and seal edges.",
      "Roll gently into larger circles, being careful not to break.",
      "Cook on hot griddle with ghee until golden and crispy.",
      "Serve hot with butter, yogurt, and pickles."
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