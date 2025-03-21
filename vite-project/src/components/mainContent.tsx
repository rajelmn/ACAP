// import boys from '../assets/boys.jpg';
import { useEffect, useState } from "react";
import girl from "../assets/girl.jpg";
import Card from "./card";
import logo from "../assets/acap.png"
// import { Droplets, Sailboat, Home, HeartPulse, Contact } from 'lucide-react';
// import { MdOutlineLocalPharmacy as Pharmacy } from "react-icons/md";
import { useTranslation, Trans } from "react-i18next";
import { Blog, blogObj } from "./Blog";
import { Heart, School, Book, Users } from 'lucide-react'; // Import different icons for variety
import { Button } from "./ui/button";
import donation from "../assets/donation.jpg"
import { Link } from "react-router-dom";
import ContactSection from "../pages/footer";
// import parse from "html-react-parser"
import Projects from "./projects";
import i18next from "i18next";
import { PhoneNumber } from "./dashboard";
// import i18n from "@/i18n";

export default function Main({ lang }: { lang: string }) {
    const { t } = useTranslation();
    const [blogs, setBlogs] = useState([]);
    const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumber[]>([]) ; 
    // alert(i18next.language)
    useEffect(() => {
        async function loadBlogs() {
            const res = await fetch(`/blog/${i18next.language}`);
            if(res.ok) {
                // alert("ok for" + i18next.language)
                const fetchedBlogs = await res.json() ; 
                setBlogs(fetchedBlogs) 
            }
            else {
                setBlogs([]) ; 
            }
            console.log(res)
            // alert(res)
        }

        async function loadPhoneNumbers() {
            try {
                const phoneNumbersRes = await fetch("/api/phone").then(res => res.json())
                console.log(phoneNumbersRes)
                if(Array.isArray(phoneNumbersRes) && phoneNumbersRes.length > 0) {
                    console.log("condition")
                    setPhoneNumbers(phoneNumbersRes)
                }
            } catch(err) {
                console.log(err)
            }
        }
        loadBlogs();
        loadPhoneNumbers() ; 
    }, [i18next.language])

   
    return (
<>
        <main
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${girl})`,
                width: '100%',
                height: '85vh',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }}
            className={`${lang === "ar" ? 'arabic' : ''}`}
        >
            <div className='h-full flex flex-col justify-center text-white items-start px-8 md:px-16 lg:px-24'>
                <p className='font-bold text-5xl md:text-6xl/tight max-w-2xl'>
                <Trans>
                    <span>
                        {t("home.mainMessage")}
                    </span>
                    <span className='font-thin'>
                        {' '} {t("home.smallText")}
                    </span>
                </Trans>
                </p>
                <p className='mt-4 text-lg md:text-xl max-w-xl text-gray-200'>
                    {t("home.definition")}
                </p>
                <a href="/#donation">
                <button className='px-5 py-2 flex items-center gap-2 rounded-md bg-[#FDB71D] text-black font-medium mt-8 hover:bg-[#e9a813] transition-colors'>
                    {t("home.donationButton")} <Heart className="ml-1" size={18} />
                </button>
                </a>
            </div>

            {/* Programs Section with Cards */}
            <section className="py-20 bg-[#151010]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our <span className="text-[#FDB71D]">Programs</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Education Card */}
                        <div className="card p-6 rounded-lg border border-gray-700 hover:border-[#FDB71D] transition-all duration-300 bg-[#1a1515] group hover:translate-y-[-5px]">
                            <div className="flex flex-col items-center text-center mb-4">
                                <div className="p-4 bg-[#1d1818] rounded-full mb-4 group-hover:bg-[#2a2424] transition-colors">
                                    <span className="text-[#FDB71D] text-3xl">
                                        <Book />
                                    </span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-4">
                                        {t("programs.education.title")}
                                    </h2>
                                    <p className="text-gray-300">
                                        {t("programs.education.description")}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <a href="#" className="text-[#FDB71D] hover:underline inline-flex items-center">
                                    Learn more <span className="ml-1">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Mentorship Card */}
                        <div className="card p-6 rounded-lg border border-gray-700 hover:border-[#FDB71D] transition-all duration-300 bg-[#1a1515] group hover:translate-y-[-5px]">
                            <div className="flex flex-col items-center text-center mb-4">
                                <div className="p-4 bg-[#1d1818] rounded-full mb-4 group-hover:bg-[#2a2424] transition-colors">
                                    <span className="text-[#FDB71D] text-3xl">
                                        <Users />
                                    </span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-4">
                                        {t("programs.mentorship.title")}
                                    </h2>
                                    <p className="text-gray-300">
                                        {t("programs.mentorship.description")}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <a href="#" className="text-[#FDB71D] hover:underline inline-flex items-center">
                                    Learn more <span className="ml-1">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Resources Card */}
                        <div className="card p-6 rounded-lg border border-gray-700 hover:border-[#FDB71D] transition-all duration-300 bg-[#1a1515] group hover:translate-y-[-5px]">
                            <div className="flex flex-col items-center text-center mb-4">
                                <div className="p-4 bg-[#1d1818] rounded-full mb-4 group-hover:bg-[#2a2424] transition-colors">
                                    <span className="text-[#FDB71D] text-3xl">
                                        <School />
                                    </span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-4">
                                        {t("programs.resources.title")}
                                    </h2>
                                    <p className="text-gray-300">
                                        {t("programs.resources.description")}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <a href="#" className="text-[#FDB71D] hover:underline inline-flex items-center">
                                    Learn more <span className="ml-1">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about-us" className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h1 className="font-bold text-4xl md:text-5xl text-center mb-12">
                        <span className="relative">
                            {t("programs.aboutUs.title")}
                            <span className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-[#FDB71D]"></span>
                        </span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2  gap-8 items-center">
                        <div className="relative">
                            <img src={logo} className="w-full h-auto rounded-lg shadow-lg" alt="Our Mission" />

                        </div>

                        <div>
                            <p className="text-lg/relaxed text-gray-700 mb-6">
                                {t("programs.aboutUs.definition")}
                            </p>

                            <Link to="/about-us">
                            
                            <Button className="mt-5">
                                {t("readmore")}
                            </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h1 className="font-bold text-4xl md:text-5xl text-center mb-12">
                        <span className="relative">
                            {t("programs.aboutUs.vision.title")}
                            <span className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-[#FDB71D]"></span>
                        </span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div >
                            <p className="text-lg/relaxed text-gray-700 mb-6">
                              {t("programs.aboutUs.vision.definition")}
                            </p>
                            
                        </div>

                        <div className="relative flex justify-center md:justify-end">
                            <img
                                src={donation}
                                className="w-full max-w-md rounded-lg shadow-lg"
                                alt="Our Vision"
                            />
                           
                        </div>
                    </div>
                </div>
            </section>

            <h1 id="donation" className='text-4xl  my-9 text-center font-bold mx-auto'>
                {t("donation.button")}
            </h1>
            <article dir="rtl" className='grid grid-cols-1 [@media(min-width:880px)]:grid-cols-3'>

                {phoneNumbers.map((item) => 
                <Card image={item.image} number={item.number} />
                )}
            </article>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        {t("projects")}
                    </h2>
                    <Projects lng={lang}/>
                    </div>
            </section>
            <section id="blog" className="py-16 bg-gray-100">
                <h1 className="text-4xl text-center">
                    {t("activites")}
                </h1>
                <div className="blog-container gap-5 md:grid-cols-3 grid grid-cols-1">

                    {blogs.map((blog: blogObj) =>
                        <Blog
                            content={blog.content}
                            image={blog.image}
                            author={blog.author}
                            title={blog.title}
                            publishDate={blog.publishDate}
                            lng={blog.lng}
                            id={blog.id}
                        />
                    )}
                </div>


            </section>
            
        <ContactSection />
        </main>
        </>


    )
}

