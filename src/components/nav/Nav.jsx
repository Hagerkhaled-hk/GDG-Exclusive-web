import './Nav.css';

import  { useState } from 'react';
import { Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev );
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
    {/* black nav  */}
      <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
        <div className="flex-1 text-center text-xs sm:text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <Link to="/" className="ml-2 font-semibold underline">ShopNow</Link>
        </div>
        <div className="flex items-center gap-1 text-sm cursor-pointer">
          <select name="language" id="language-select" className=" text-white outline-none">
            <option value="english" className='text-black'>English</option>
            <option value="arabic" className='text-black'>Arabic</option>
          </select>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white border-b px-4 sm:px-8 py-4 flex items-center justify-between">
         <Link to="/">
        <h1 className="text-2xl sm:text-4xl font-bold text-header">Exclusive</h1>

         </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="relative group">
            <span className="hover:text-red transition-colors font-inter">Home</span>
            <span className="hidden md:block absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/contact" className="relative group">
            <span className="hover:text-red transition-colors">Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/about" className="relative group">
            <span className="hover:text-red transition-colors">About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/signup" className="relative group">
            <span className="hover:text-red transition-colors">Sign Up</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all"></span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-gray-100 rounded px-3 py-2">
            <input 
              type="search" 
              placeholder="What are you looking for?" 
              className="bg-transparent outline-none text-sm w-48"
            />
          </div>
          <Link to="/wishlist"> 
            <Heart size={24} className="cursor-pointer hover:text-red transition-colors" />
          </Link>
          <Link to="/cart">
            <ShoppingBag size={24} className="cursor-pointer hover:text-red transition-colors" />
          </Link>
         <button className="bg-red-500 text-white p-2 rounded 
                   transition-transform duration-200 
                   active:scale-95">
  Log In
</button>
        </div>

     {/* mobile  */}
        <div className="flex md:hidden items-center gap-3">
              <button className="bg-red-500 text-white p-2 rounded 
                   transition-transform duration-200 
                   active:scale-95">
  Log In
</button>
          <button onClick={toggleSidebar} className="ml-2">
            <Menu size={24} className="hover:text-red transition-colors" />
          </button>
        </div>
        
      </nav>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-4">
          <button 
            onClick={closeSidebar}
            className="absolute top-4 right-4 hover:text-red transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="mt-12 space-y-6">
            <div className="flex items-center bg-gray-100 rounded px-3 py-2">
              <input 
                type="search" 
                placeholder="What are you looking for?" 
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                onClick={closeSidebar}
                className=" hover:text-red transition-colors py-2 "
              >
                Home
              </Link>
              <Link 
                to="/contact" 
                onClick={closeSidebar}
                className=" hover:text-red transition-colors py-2 "
              >
                Contact
              </Link>
              <Link 
                to="/about" 
                onClick={closeSidebar}
                className=" hover:text-red transition-colors py-2 "
              >
                About
              </Link>
              <Link 
                to="/signup" 
                onClick={closeSidebar}
                className=" hover:text-red transition-colors py-2 "
              >
                Sign Up
              </Link>

               <Link to="/wishlist"> 
            <Heart size={20} className="cursor-pointer hover:text-red transition-colors" />Whislist
          </Link>
          <Link to="/cart">
            <ShoppingBag size={20} className="cursor-pointer hover:text-red transition-colors" />Cart
          </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;