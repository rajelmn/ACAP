import logo from "../assets/woman.png"
import { FaHeart as Heart } from "react-icons/fa";
import { TbWorld as World} from "react-icons/tb";
import SideBar from "./sideBar";
import { useState } from "react";
import { RxHamburgerMenu as Menu } from "react-icons/rx";
import { useTranslation } from "react-i18next";

export default function Header() {
    const [isClickedOnMenu , setIsclickedOnMenu] = useState<boolean>(false)
    const { t, i18n} = useTranslation();
    return (
        
        <>
        {isClickedOnMenu && <SideBar setIsClickedOnMenu={setIsclickedOnMenu} />}
        <header className="p-4 fixed bg-white flex items-center justify-between container mx-auto">
            <div className="flex items-center mr-2">
                <div className="flex items-center mr-8">
                    <img src={logo} className="w-12 mr-2" alt="ASAP Logo" />
                    <p className="font-semibold text-lg">
                        ACAP
                    </p>
                </div>
                <ul className="hidden md:flex space-x-8">
                    <li className="hover:text-amber-500 transition-colors" onClick={() => i18n.changeLanguage("ar")}>
                        <a href="#">{t("header.home")}</a>
                    </li>
                    <li className="hover:text-amber-500 transition-colors" onClick={() => i18n.changeLanguage("fr")}>
                        <a href="#">{t("header.aboutUs")}</a>
                    </li>
                    <li className="hover:text-amber-500 transition-colors" onClick={() => i18n.changeLanguage("en")}>
                        <a href="#">
                            {t("header.blog")}
                        </a>
                    </li>
                    <li className="hover:text-amber-500 transition-colors">
                        <a href="#">
                            {t("header.contact")}
                        </a>
                    </li>
                </ul>
            </div>
            <div onClick={() => setIsclickedOnMenu(true)} className="flex items-center space-x-4">
               <span onClick={() => setIsclickedOnMenu(true)} className="text-xl hidden md:block opacity-80 cursor-pointer">

                <World />
               </span>
               <span className="text-xl md:hidden cursor-pointer">
                
                <Menu />
               </span>
                <button className="px-5 py-2.5 hidden md:flex  bg-[#FDB71D] text-white cursor-pointer font-medium shadow-sm hover:bg-amber-700 hover:shadow-md active:bg-amber-800 active:shadow-inner transition-all items-center space-x-2">
                    <span>Donate Now</span>
                    <Heart />
                </button>
            </div>
        </header>
        </>
    )
}