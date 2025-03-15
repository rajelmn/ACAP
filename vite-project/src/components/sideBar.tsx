// import { IoMdClose as Close } from "react-icons/io";
// import { FaHeart } from "react-icons/fa";
import { X, Heart, ChevronRight } from 'lucide-react';

export default function SideBar({setIsClickedOnMenu}: {setIsClickedOnMenu: (arg: boolean) => void}) {
  return (
    <>
      {/* Backdrop overlay */}
      <div className="fixed inset-0  bg-opacity-50 z-40" />
      
      {/* Sidebar */}
      <aside className="fixed top-0 right-0 h-full bg-white shadow-lg z-50 w-full md:w-80">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-amber-300 p-4 flex justify-between items-center">
            <h2 className="font-bold text-lg">Menu</h2>
            <button 
              className="p-1 rounded-full hover:bg-amber-400 transition-colors"
              aria-label="Close menu"
              onClick={() => setIsClickedOnMenu(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-grow py-6">
            <ul className="space-y-1">
              {['Home', 'About us', 'Blog', 'Contact us'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                  >
                    <span>{item}</span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </a>
                </li>
              ))}
              <li>
              <a 
                    href="#"
                    className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                  >
                    <span>languages</span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </a>
              </li>
            </ul>
          </nav>
          
          {/* Footer */}
          <div className="p-6 border-t">
            <button className="w-full py-3 bg-amber-500 text-white rounded-md flex items-center justify-center space-x-2 hover:bg-amber-600 transition-colors">
              <span className="font-medium">Donate Now</span>
              <Heart size={16} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}