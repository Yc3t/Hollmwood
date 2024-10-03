import { Menu } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4">
        <Menu />
      </SheetTrigger>
      <SheetContent side = "left" className="p-0 pt-10 dark:bg-dark w-32">
        <Sidebar/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
