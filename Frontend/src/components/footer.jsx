import React from "react";

const footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8   ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold text-purple-400">WorkFinder</h2>
          <p className="text-sm">Find your dream job with us</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <a href="#" className="hover:underline text-sm">
            About Us
          </a>
          <a href="#" className="hover:underline text-sm">
            Contact
          </a>
          <a href="#" className="hover:underline text-sm">
            Privacy Policy
          </a>
        </div>

        {/* Right Section */}
        <div className="text-sm text-gray-400">
          © 2024 WorkFinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default footer;
