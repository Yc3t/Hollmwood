import { Link } from "react-router-dom"; //we'll use it later -.-
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import MobileSideBar from "./mobile-sidebar";
import '../fonts.css';

// Define the font family constant for Hollywood Hills
const headerFontStyle = { fontFamily: "'Hollywood Hills', sans-serif" };

function Navbar() {
  return (
    /* <nav className='fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary-500/10'>
      <Link to="/" className='text-blue-500'>Home</Link>
      <Link to="/chat" className='text-blue-500'>Chat</Link>
    </nav> 
    */
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-dark h-16">
      <div className="flex items-center">
        <MobileSideBar/>
        <Link to="/">
          <h1
            className="hidden md:block text-xl md:text-3xl font-bold text-primary "
            style={headerFontStyle}
          >
                Ho<span className="font-bold text-yellow-500 dark:text-yellow-400">LLM</span>wood

          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button 
        size = "sm">
            Press!
           <Sparkles className="h-4-w-4 fill-yellow-300 text-yellow-300 ml-2 size-4"/>
            </Button>
            <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
