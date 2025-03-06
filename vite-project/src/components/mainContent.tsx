// import boys from '../assets/boys.jpg';
import { useEffect, useState } from "react";
import girl from "../assets/girl.jpg";
// import { FaHeart as Heart } from "react-icons/fa";
// import { IoSchool as School } from "react-icons/io5";
import sedad from "../assets/sedad.png";
import bankily from "../assets/bankliy.png";
import masrivi from "../assets/masrivi.png";
import Card from "./card";
import logo from "../assets/acap.png"
import { Droplets, Sailboat, Home, HeartPulse } from 'lucide-react';
import { MdOutlineLocalPharmacy as Pharmacy } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Blog, blogObj } from "./Blog";
import { Heart, School, Book, Users } from 'lucide-react'; // Import different icons for variety
import { Button } from "./ui/button";
import donation from "../assets/donation.jpg"

export default function Main({ lang }: { lang: string }) {
    const { t } = useTranslation();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function loadBlogs() {
            const res = await fetch("/api/blog").then(res => res.json());
            setBlogs(res)
            console.log(res)
            // alert(res)
        }
        loadBlogs()
    }, [])
    return (

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
            {/* Hero Section */}
            <div className='h-full flex flex-col justify-center text-white items-start px-8 md:px-16 lg:px-24'>
                <p className='font-bold text-5xl md:text-6xl/tight max-w-2xl'>
                    <span className=''>
                        The power to <br /> Choose in a
                    </span>
                    <span className='font-thin'>
                        {' '}child's <br /> hands
                    </span>
                </p>
                <p className='mt-4 text-lg md:text-xl max-w-xl text-gray-200'>
                    Helping children shape their own future through education and support
                </p>
                <button className='px-5 py-2 flex items-center gap-2 rounded-md bg-[#FDB71D] text-black font-medium mt-8 hover:bg-[#e9a813] transition-colors'>
                    Support Our Cause <Heart className="ml-1" size={18} />
                </button>
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
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h1 className="font-bold text-4xl md:text-5xl text-center mb-12">
                        <span className="relative">
                            {t("programs.aboutUs.title")}
                            <span className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-[#FDB71D]"></span>
                        </span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative">
                            <img src={logo} className="w-full h-auto rounded-lg shadow-lg" alt="Our Mission" />

                        </div>

                        <div>
                            <p className="text-lg/relaxed text-gray-700 mb-6">
                                {t("programs.aboutUs.definition")}
                            </p>

                            <Button className="mt-5">
                                Read more
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 max-w-6xl">
    <h1 className="font-bold text-4xl md:text-5xl text-center mb-12">
      <span className="relative">
        Our Vision
        <span className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-[#FDB71D]"></span>
      </span>
    </h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-lg/relaxed text-gray-700 mb-6">
          To be the leading organization in Mauritania in the field of poverty alleviation, by providing humanitarian and sustainable support to needy groups, and contributing to building a more inclusive and socially just society.
        </p>
        <div className="mt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#151010] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[#FDB71D] text-sm">01</span>
            </div>
            <span className="font-medium">Poverty Alleviation</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#151010] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[#FDB71D] text-sm">02</span>
            </div>
            <span className="font-medium">Humanitarian Support</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#151010] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[#FDB71D] text-sm">03</span>
            </div>
            <span className="font-medium">Social Justice</span>
          </div>
        </div>
      </div>
      
      <div className="relative flex justify-center md:justify-end">
        <img 
          src={donation} 
          className="w-full max-w-md rounded-lg shadow-lg" 
          alt="Our Vision" 
        />
        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#FDB71D] rounded-full flex items-center justify-center text-white font-bold text-sm">
          Make a<br/>Difference
        </div>
      </div>
    </div>
  </div>
</section>

            <h1 className='text-4xl my-9 text-center font-bold mx-auto'>Donation</h1>
            <article className='grid grid-cols-1 [@media(min-width:880px)]:grid-cols-3'>
                <Card image={sedad} number="111111111" />
                <Card image={bankily} number="111111111" />
                <Card image={masrivi} number="111111111" />
            </article>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        {t("projects")}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-amber-100 rounded-lg text-amber-500">
                                    <School />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-2">Building a School</h3>
                                    <p className="text-gray-600 text-sm mb-4">Construction of a primary school to provide education for 200 children in the village of Nouadhibou.</p>
                                    <div className="text-amber-500 font-semibold">
                                        Cost: 25,000 MRU
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-amber-100 rounded-lg text-amber-500">
                                    <Pharmacy />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-2">Local Pharmacy</h3>
                                    <p className="text-gray-600 text-sm mb-4">Establishing a community pharmacy to provide essential medications and healthcare services.</p>
                                    <div className="text-amber-500 font-semibold">
                                        Cost: 15,000 MRU
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-amber-100 rounded-lg text-amber-500">
                                    <Droplets />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-2">Clean Water Well</h3>
                                    <p className="text-gray-600 text-sm mb-4">Digging a well to provide clean water access for up to 500 people in drought-affected areas.</p>
                                    <div className="text-amber-500 font-semibold">
                                        Cost: 8,000 MRU
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project 4 */}
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-amber-100 rounded-lg text-amber-500">
                                    <Sailboat />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-2">Fishing Boats</h3>
                                    <p className="text-gray-600 text-sm mb-4">Purchasing boats for local fishermen to improve food security and create sustainable livelihoods.</p>
                                    <div className="text-amber-500 font-semibold">
                                        Cost: 12,000 MRU
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project 5 */}
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-amber-100 rounded-lg text-amber-500">
                                    <Home />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-2">Community Center</h3>
                                    <p className="text-gray-600 text-sm mb-4">Building a multi-purpose community center for educational and social activities.</p>
                                    <div className="text-amber-500 font-semibold">
                                        Cost: 30,000 MRU
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project 6 */}
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-amber-100 rounded-lg text-amber-500">
                                    <HeartPulse />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-2">Medical Outreach</h3>
                                    <p className="text-gray-600 text-sm mb-4">Mobile medical clinic to reach remote villages with basic healthcare.</p>
                                    <div className="text-amber-500 font-semibold">
                                        Cost: 18,000 MRU
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-100">
                <h1 className="text-4xl text-center">Our latest blogs</h1>
                <div className="blog-container gap-5 md:grid-cols-3 grid grid-cols-1">
                    {/* 
                <Blog 
                image={mosque}
                content="lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt provident, ut iste ad cupiditate placeat, possimus libero aliquid fuga dignissimos consequatur odit quidem voluptatem sunt numquam aperiam labore qui laudantium?"
                author = "Brahim"
                date = "2025-03-13"
                title = "Building a mosque at chinguitti and faced alot of troubles "
                />
                <Blog 
                image={school}
                content="lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit, ut iste ad cupiditate placeat, possimus libero aliquid fuga dignissimos consequatur odit quidem voluptatem sunt numquam aperiam labore qui laudantium?"
                author = "Brahim"
                date = "2025-03-13"
                title = "Gumball school is now under upgrade and new items are added daily to improve it "
                /> */}
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
            <footer>
                <h1 className="text-4xl font-bold text-center my-4">Contact</h1>
            </footer>
        </main>


    )
}

