import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar"; // Adjust the path as necessary
import Footer from "./components/footer"; // Adjust the path as necessary

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-800 h-[100px] text-white ">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
