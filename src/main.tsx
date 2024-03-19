import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home.tsx";
import MenuPage from "./pages/menu.tsx";
import FavoritesPage from "./pages/favorites.tsx";
import RandomMealPage from "./pages/random-meal.tsx";
import AboutMePage from "./pages/aboutme.tsx";
import CategoryPage from "./pages/category.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
  {
    path: "/random-meal",
    element: <RandomMealPage />,
  },
  {
    path: "/about-me",
    element: <AboutMePage />,
  },
  {
    path: "categories/:categoryName",
    element: <CategoryPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
