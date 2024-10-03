import { Link } from "react-router-dom"; //we'll use it later -.-

import { Menu, Sparkles } from "lucide-react";
import "@fontsource/poppins"; // Import the Poppins font
import { Button } from "@/components/ui/button";

const fontFamily = { fontFamily: "Poppins, sans-serif" }; // Define the font family constant with 600 weight

function Navbar() {
  return (
    /* <nav className='fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary-500/10'>
      <Link to="/" className='text-blue-500'>Home</Link>
      <Link to="/chat" className='text-blue-500'>Chat</Link>
    </nav> 
    */
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary-500/10">
      <div className="flex items-center">
        <Menu className="block md:hidden"></Menu>
        <Link to="/">
          <h1
            className="hidden md:block text-xl md:text-3xl font-bold text-primary "
            style={fontFamily}
          >
            Ho<span className="font-bold text-purple-200">LLM</span>wood
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button 
        size = "sm">
            Press!
           <Sparkles className="h-4-w-4 fill-yellow-300 text-yellow-300 ml-2 size-4"/>
            </Button>
      </div>
    </div>
  );
}

export default Navbar;
