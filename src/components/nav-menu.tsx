import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";

export function NavMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant="outline">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription className="flex flex-col justify-center">
            <Link to="/" className="text-2xl font-bold hover:text-primary">
              Home Page
            </Link>
            <Link to="/menu" className="text-2xl font-bold hover:text-primary">
              Menu
            </Link>
            <Link
              to="/favorites"
              className="text-2xl font-bold hover:text-primary"
            >
              My Favorites
            </Link>
            <Link
              to="/random-meal"
              className="text-2xl font-bold hover:text-primary"
            >
              Random Meal
            </Link>
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col justify-end mt-80">
          <Link
            to="/about-me"
            className="text-2xl font-bold hover:text-primary mt-28"
          >
            About Me
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
