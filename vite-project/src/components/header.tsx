import logo from "../assets/image.png"
import { FaHeart as Heart } from "react-icons/fa";
import { TbWorld as World } from "react-icons/tb";
import SideBar from "./sideBar";
import { useState } from "react";
import { RxHamburgerMenu as Menu } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Header({ setLang }: { setLang: (arg: string) => void }) {
    const [isClickedOnMenu, setIsclickedOnMenu] = useState<boolean>(false)
    // const [lang, setLang] = useState("");
    const { t, i18n } = useTranslation();


    function handleLanguageChange(language: string) {
        console.log(language);
        setLang(language);
        i18n.changeLanguage(language || "en")
    }
    return (

        <>
            {isClickedOnMenu && <SideBar setIsClickedOnMenu={setIsclickedOnMenu} />}
            <header className="p-4 fixed bg-white flex items-center justify-between w-screen">
                <div className="flex items-center mr-2">
                    <div className="flex items-center mr-8">
                        <img src={logo} className="w-12 mr-2" alt="ASAP Logo" />
                        <p className="font-semibold text-lg">
                            ACAP
                        </p>
                    </div>
                    <ul className="hidden md:flex space-x-8">
                        <li className="hover:text-amber-500 transition-colors">
                            <a href="#">{t("header.home")}</a>
                        </li>
                        <li className="hover:text-amber-500 transition-colors" >
                            <a href="#">{t("header.aboutUs")}</a>
                        </li>
                        <li className="hover:text-amber-500 transition-colors" >
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
                <div className="flex items-center space-x-4">
                    <span className="text-xl hidden md:block opacity-80 cursor-pointer">
                        <Select name="language" defaultValue="en" onValueChange={handleLanguageChange}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder={<World />} />
                                {/* <World /> */}
                                {/* <span>english</span> */}
                            </SelectTrigger>
                            <SelectContent className="">
                                <SelectItem value="en">
                                    <div className="flex items-center">
                                        <span className="mr-2">🇬🇧</span> English
                                    </div>
                                </SelectItem>
                                <SelectItem value="ar">
                                    <div className="flex items-center">
                                        <span className="mr-2">🇸🇦</span> العربية
                                    </div>
                                </SelectItem>
                                <SelectItem value="fr">
                                    <div className="flex items-center">
                                        <span className="mr-2">🇫🇷</span> Français
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </span>
                    <span
                        onClick={() => setIsclickedOnMenu(true)}
                        className="text-xl md:hidden cursor-pointer">

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