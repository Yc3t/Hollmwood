import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import SearchInput from "./components/search-input";
import Categories from "./components/categories";
import prismadb from "./lib/prismadb";

function App() {
//  const categories = await prismadb.category.findMany();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="h-full flex flex-col">
          <Navbar />
          <div className="flex flex-1 mt-16">
            <div className="hidden md:flex w-20 flex-col fixed inset-y-0 mt-16">
              <Sidebar />
            </div>
            <div className="flex-1 ml-20">
              <div className="max-w-xl mx-auto"> {/* Add this wrapper */}
              <SearchInput />
              </div>

              <Routes>
                <Route path="/chat" element={<Chat />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;