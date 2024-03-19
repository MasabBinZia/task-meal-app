import axios from "axios";
import { Button } from "../components/ui/button";
import { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Meal {
  strMealThumb: string;
  strMeal: string;
  strInstructions: string;
}

function RandomMealPage() {
  const [randomMeal, setRandomMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomMeal = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      if (response.data && response.data.meals) {
        setRandomMeal(response.data.meals[0]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center py-20 w-full h-full">
      <h1 className="text-6xl text-primary font-bold">Random Meal</h1>
      {loading ? (
        <p className="h-[50vh] flex justify-center items-center text-center">
          Loading...
        </p>
      ) : randomMeal ? (
        <Card className="w-[850px] mt-4">
          <CardHeader className="flex flex-col justify-center items-center group">
            <img
              src={randomMeal.strMealThumb}
              alt={randomMeal.strMeal}
              className="rounded-md transition duration-200 group-hover:scale-110"
              style={{ width: "400px" }}
            />
            <CardTitle>{randomMeal.strMeal}</CardTitle>
            <CardDescription>{randomMeal.strInstructions}</CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <p className="h-[50vh] flex justify-center items-center text-center">
          Click "Generate Meal" to get started.
        </p>
      )}

      <Button onClick={fetchRandomMeal} className="mt-4">
        Generate Meal
      </Button>
    </main>
  );
}

export default RandomMealPage;
