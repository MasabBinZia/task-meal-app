import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

interface Meal {
  strMeal: string;
  strMealThumb: string;
}

function CategoryPage() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
        );
        if (response.data && response.data.meals) {
          setMeals(response.data.meals);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center py-20 w-full h-full">
      <h1 className="text-6xl text-primary font-bold">My Favorite</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="py-12 grid grid-cols-3 justify-center items-center gap-6">
          {meals?.map((meal, index) => (
            <Card className="w-[350px] group" key={index}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded-md transition duration-200 group-hover:scale-110"
                style={{ width: "400px" }}
              />
              <CardHeader>
                <CardTitle>{meal.strMeal}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}

export default CategoryPage;
