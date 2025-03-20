// import { IoMdClose as Close } from "react-icons/io";
// import { FaHeart } from "react-icons/fa";
import { X, Heart, ChevronRight } from 'lucide-react';
import Lang from './lang';
import { useTranslation } from 'react-i18next';

export default function SideBar({setIsClickedOnMenu , handleLanguageChange}: {setIsClickedOnMenu: (arg: boolean) => void, handleLanguageChange: (arg: string) => void}) {
  const { t } = useTranslation() ; 
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
          <li>
             
                  <a 
                  onClick={() => setIsClickedOnMenu(false)}
                    href="/#"
                    className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                  >
                    <span>
                      {t("header.home")}
                    </span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </a>
                </li>
                <li>
                  <a 
                  onClick={() => setIsClickedOnMenu(false)}
                    href="/#about-us"
                    className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                  >
                    <span>
                      {t("header.aboutUs")}
                    </span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </a>
                </li>
                <li>
                  <a 
                  onClick={() => setIsClickedOnMenu(false)}
                    href="/#blog"
                    className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                  >
                    <span>
                      {t("header.blog")}
                    </span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </a>
                </li>
                <li>
                  <a 
                    href="/#contact"
                    onClick={() => setIsClickedOnMenu(false)}
                    className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                  >
                    <span>
                      {t("header.contact")}
                    </span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </a>
                </li>
              {/* ))} */}
              <li>
              <a 
                    href="#"
                    // onClick={() => setIsClickedOnMenu(false)}
                    className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                  >
                    <Lang handleLanguageChange={handleLanguageChange}/>
                    {/* <ChevronRight size={16} className="text-gray-400" /> */}
                  </a>
              </li>
            </ul>
          </nav>
          
          {/* Footer */}
          <div className="p-6 border-t">
            <a href="/#donation">

            <button className="w-full py-3 bg-amber-500 text-white rounded-md flex items-center justify-center space-x-2 hover:bg-amber-600 transition-colors">
              <span className="font-medium">Donate Now</span>
              <Heart size={16} />
            </button>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}