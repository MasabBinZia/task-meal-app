import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import axios from "axios";
import { Link } from "react-router-dom";


interface Category {
  strCategory: string;
  
}


function MenuPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true); // Start loadin
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        if (response.data && response.data.categories) {
          setCategories(response.data.categories);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <main className="flex flex-col justify-center items-center py-20 w-full h-full">
      <h1 className="text-6xl text-primary font-bold">Menu Page</h1>

      {loading ? (
        <p className="h-[50vh] flex justify-center items-center text-center">
          Loading categories...
        </p>
      ) : categories ? (
        <div className="py-12 grid grid-cols-2 justify-center items-center gap-6">
          {categories.map((category, index) => (
            <Link to={`/categories/${category.strCategory}`}>
              <Button className="w-full" key={index}>
                {category.strCategory}
              </Button>
            </Link>
          ))}
        </div>
      ) : (
        <p className="h-[50vh] flex justify-center items-center text-center">
          No Categories Found.
        </p>
      )}
    </main>
  );
}

export default MenuPage;
