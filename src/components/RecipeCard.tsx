import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat } from "lucide-react";

export interface Recipe {
  id: string;
  name: string;
  image: string;
  cookTime: string;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: string[];
  instructions: string[];
  description: string;
}

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
  matchedIngredients: number;
}

export function RecipeCard({ recipe, onClick, matchedIngredients }: RecipeCardProps) {
  const difficultyColor = {
    Easy: "bg-curry/20 text-curry border-curry/30",
    Medium: "bg-turmeric/20 text-orange-700 border-turmeric/30",
    Hard: "bg-chili/20 text-red-700 border-chili/30"
  };

  return (
    <Card 
      className="cursor-pointer group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-cardamom/10 border-border/50"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {recipe.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {recipe.description}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{recipe.servings}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat size={14} />
            <Badge variant="outline" className={`text-xs ${difficultyColor[recipe.difficulty]}`}>
              {recipe.difficulty}
            </Badge>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            {matchedIngredients} / {recipe.ingredients.length} ingredients
          </Badge>
          <div className="text-xs text-muted-foreground">
            {Math.round((matchedIngredients / recipe.ingredients.length) * 100)}% match
          </div>
        </div>
      </CardContent>
    </Card>
  );
}