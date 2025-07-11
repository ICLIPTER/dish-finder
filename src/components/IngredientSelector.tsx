import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

const COMMON_INGREDIENTS = [
  "Onion", "Tomato", "Garlic", "Ginger", "Cumin", "Coriander", "Turmeric", "Chili Powder",
  "Garam Masala", "Chicken", "Paneer", "Rice", "Lentils", "Spinach", "Potato", "Coconut",
  "Mustard Seeds", "Curry Leaves", "Yogurt", "Lime", "Cilantro", "Mint", "Cardamom", "Cinnamon",
  "Cloves", "Bay Leaves", "Fenugreek", "Asafoetida", "Ghee", "Oil", "Salt", "Sugar",
  "Cashews", "Almonds", "Peas", "Cauliflower", "Eggplant", "Okra", "Beans", "Carrot",
  "Bell Pepper", "Green Chilies", "Tamarind", "Jaggery", "Saffron", "Poppy Seeds"
];

interface IngredientSelectorProps {
  selectedIngredients: string[];
  onIngredientsChange: (ingredients: string[]) => void;
}

export function IngredientSelector({ selectedIngredients, onIngredientsChange }: IngredientSelectorProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIngredients = COMMON_INGREDIENTS.filter(ingredient =>
    ingredient.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedIngredients.includes(ingredient)
  );

  const addIngredient = (ingredient: string) => {
    onIngredientsChange([...selectedIngredients, ingredient]);
  };

  const removeIngredient = (ingredient: string) => {
    onIngredientsChange(selectedIngredients.filter(i => i !== ingredient));
  };

  const clearAll = () => {
    onIngredientsChange([]);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-cardamom/20 to-background border-border/50 shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Select Your Ingredients</h2>
          {selectedIngredients.length > 0 && (
            <Button variant="outline" size="sm" onClick={clearAll} className="text-muted-foreground">
              Clear All
            </Button>
          )}
        </div>

        <input
          type="text"
          placeholder="Search ingredients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
        />

        {selectedIngredients.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Selected Ingredients:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedIngredients.map((ingredient) => (
                <Badge
                  key={ingredient}
                  variant="default"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  {ingredient}
                  <button
                    onClick={() => removeIngredient(ingredient)}
                    className="ml-1 hover:bg-primary-foreground/20 rounded-full p-0.5 transition-colors"
                  >
                    <X size={12} />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Available Ingredients:</h3>
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
            {filteredIngredients.map((ingredient) => (
              <Button
                key={ingredient}
                variant="secondary"
                size="sm"
                onClick={() => addIngredient(ingredient)}
                className="text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {ingredient}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}