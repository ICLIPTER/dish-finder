import { useState } from "react";
import { IngredientSelector } from "@/components/IngredientSelector";
import { RecipeCard } from "@/components/RecipeCard";
import { RecipeModal } from "@/components/RecipeModal";
import { getMatchingRecipes } from "@/data/recipes";
import { Recipe } from "@/components/RecipeCard";
import { ChefHat, Sparkles } from "lucide-react";

const Index = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const matchingRecipes = getMatchingRecipes(selectedIngredients);

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const getMatchedIngredients = (recipe: Recipe) => {
    return recipe.ingredients.filter(ingredient =>
      selectedIngredients.some(selected =>
        selected.toLowerCase() === ingredient.toLowerCase()
      )
    ).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-turmeric/5 to-saffron/10">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-saffron to-chili rounded-lg">
              <ChefHat className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Desi Dish Finder
              </h1>
              <p className="text-sm text-muted-foreground">Discover authentic Indian recipes with your ingredients</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Ingredient Selector */}
        <section>
          <IngredientSelector
            selectedIngredients={selectedIngredients}
            onIngredientsChange={setSelectedIngredients}
          />
        </section>

        {/* Results Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Sparkles className="text-primary" size={24} />
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {selectedIngredients.length === 0 
                  ? "All Recipes" 
                  : `${matchingRecipes.length} Matching Recipes`}
              </h2>
              <p className="text-muted-foreground">
                {selectedIngredients.length === 0
                  ? "Browse our collection of authentic Indian recipes"
                  : `Recipes you can make with your selected ingredients`}
              </p>
            </div>
          </div>

          {matchingRecipes.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="text-muted-foreground" size={32} />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No recipes found</h3>
              <p className="text-muted-foreground">
                Try selecting different ingredients or clear your selection to see all recipes.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={() => handleRecipeClick(recipe)}
                  matchedIngredients={getMatchedIngredients(recipe)}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Recipe Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedIngredients={selectedIngredients}
      />
    </div>
  );
};

export default Index;
