import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, ChefHat, CheckCircle2, Circle } from "lucide-react";
import { Recipe } from "./RecipeCard";

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
  selectedIngredients: string[];
}

export function RecipeModal({ recipe, isOpen, onClose, selectedIngredients }: RecipeModalProps) {
  if (!recipe) return null;

  const difficultyColor = {
    Easy: "bg-curry/20 text-curry border-curry/30",
    Medium: "bg-turmeric/20 text-orange-700 border-turmeric/30",
    Hard: "bg-chili/20 text-red-700 border-chili/30"
  };

  const hasIngredient = (ingredient: string) => 
    selectedIngredients.some(selected => 
      selected.toLowerCase() === ingredient.toLowerCase()
    );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background to-cardamom/5">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {recipe.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-1">
              <Clock className="text-primary" size={20} />
              <span className="text-sm text-muted-foreground">Cook Time</span>
              <span className="font-medium">{recipe.cookTime}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Users className="text-primary" size={20} />
              <span className="text-sm text-muted-foreground">Servings</span>
              <span className="font-medium">{recipe.servings}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ChefHat className="text-primary" size={20} />
              <span className="text-sm text-muted-foreground">Difficulty</span>
              <Badge className={difficultyColor[recipe.difficulty]}>
                {recipe.difficulty}
              </Badge>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {recipe.description}
            </p>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Ingredients</h3>
            <div className="grid gap-2">
              {recipe.ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                    hasIngredient(ingredient)
                      ? "bg-curry/10 border border-curry/20"
                      : "bg-muted/30"
                  }`}
                >
                  {hasIngredient(ingredient) ? (
                    <CheckCircle2 size={16} className="text-curry flex-shrink-0" />
                  ) : (
                    <Circle size={16} className="text-muted-foreground flex-shrink-0" />
                  )}
                  <span
                    className={
                      hasIngredient(ingredient)
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    }
                  >
                    {ingredient}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Instructions</h3>
            <div className="space-y-3">
              {recipe.instructions.map((instruction, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}