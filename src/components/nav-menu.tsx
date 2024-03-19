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
            <a href="/" className="text-2xl font-bold hover:text-primary">
              Home Page
            </a>
            <a href={"/random-meal"}>
              <Button variant={"link"} className="w-full">
                Random Meal
              </Button>
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
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col justify-end mt-80">
          <a
            href="/about-me"
            className="text-2xl font-bold hover:text-primary mt-28"
          >
            About Me
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
