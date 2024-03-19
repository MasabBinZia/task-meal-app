import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center py-20 w-full h-full">
      <h1 className="text-6xl text-primary font-bold">Home Page</h1>
      <div className="py-12 grid grid-cols-3 justify-center items-center gap-6">
        <Link to={"/menu"}>
          <Button className="w-full">Menu</Button>
        </Link>
        <Link to={"/favorites"}>
          <Button className="w-full">Favorites</Button>
        </Link>
        <Link to={"/random-meal"}>
          <Button className="w-full">Random Meal</Button>
        </Link>
      </div>
      <a href="/" className="text-2xl font-bold hover:text-primary">
              Home Page
            </a>
            <a href="/menu" className="text-2xl font-bold hover:text-primary">
              Menu
            </a>
            <a
              href="/favorites"
              className="text-2xl font-bold hover:text-primary"
            >
              My Favorites
            </a>
            <a
              href="/random-meal"
              className="text-2xl font-bold hover:text-primary"
            >
              Random Meal
            </a>
    </main>
  );
}

export default HomePage;
