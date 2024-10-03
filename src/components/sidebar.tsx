import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
export const Sidebar = () => {
  const location = useLocation();
  const routes = [
    {
      icon: Home,
      href: "/",
      label: "Home",
    },
    {
      icon: Plus,
      href: "/companion/new",
      label: "Create",
    },
    {
      icon: Settings,
      href: "/settings",
      label: "Settings",
    },
  ];

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-dark border-primary/10 border-r">
      <div className="p-3 flex flex-1 justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              to={route.href}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                location.pathname === route.href && "text-primary bg-primary/10"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <route.icon className="h-4 w-5" />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

