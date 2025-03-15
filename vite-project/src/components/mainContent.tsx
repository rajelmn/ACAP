// import boys from '../assets/boys.jpg';
import { useEffect, useState} from "react";
import girl from "../assets/girl.jpg";
import { FaHeart as Heart } from "react-icons/fa";
import { IoSchool as School } from "react-icons/io5";
import sedad from "../assets/sedad.png";
import bankily from "../assets/bankliy.png";
import masrivi from "../assets/masrivi.png";
import Card from "./card";
import logo from "../assets/woman.png"
import mosque from "../assets/mosque.webp"
import ocean from "../assets/ocean.jpg"
import school from "../assets/school.jpg"
import { Droplets, Sailboat, Home, HeartPulse } from 'lucide-react';
import { MdOutlineLocalPharmacy as Pharmacy } from "react-icons/md";
import { Trans, useTranslation } from "react-i18next";
import { Blog } from "./Blog";
export default function Main() {
      const { t } = useTranslation();
    const [language, setLanguage] = useState<string>("");
    const [blogs, setBlogs] = useState([]) ;

    useEffect(() => {
        async function loadBlogs() {
            const res = await fetch("http://localhost:1337/api/blogs?populate=*").then(res => res.json());
            setBlogs(res.data)
            console.log(res)
            // alert(res)
        }
        loadBlogs()
    }, [])
    return (
        <main style={{
            backgroundImage: `url(${girl})`, width: '100%',
            height: '80vh',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}
        >
            <div className='h-full flex flex-col justify-center text-white items-start'>
                <p className='font-bold text-6xl/tight'>
                    {/* <span className=''>
                        The power to <br /> Choose in a
                    </span>

                    <span className='font-thin'>
                        child's <br /> hands
                    </span> */}
                    {/* {t("message", {lang:"fr"})} */}
                </p>
                <p>
                    {/* {t("programs.aboutUs.title")} */}
                </p>
                <button className='px-3 flex items-center py-1 rounded-md bg-[#FDB71D] mt-5'>
                     <Heart />
                </button>
            </div>

            <section className="py-16 bg-[#151010]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="card p-6 rounded-lg border border-gray-700 hover:border-[#d0940a] transition-all duration-300 bg-[#1a1515]">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#1d1818] rounded-lg">
                                    <span className="text-[#d0940a] text-3xl">
                                        <School />
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold text-white mb-2">
                                        {t("programs.education.title")}
                                    </h2>
                                    <p className="text-gray-300 text-sm">
                                        {t("programs.education.description")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card p-6 rounded-lg border border-gray-700 hover:border-[#d0940a] transition-all duration-300 bg-[#1a1515]">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#1d1818] rounded-lg">
                                    <span className="text-[#d0940a] text-3xl">
                                        <School />
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold text-white mb-2">
                                        {t("programs.mentorship.title")}
                                    </h2>
                                    <p className="text-gray-300 text-sm">
                                        {t("programs.mentorship.description")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card p-6 rounded-lg border border-gray-700 hover:border-[#d0940a] transition-all duration-300 bg-[#1a1515]">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#1d1818] rounded-lg">
                                    <span className="text-[#d0940a] text-3xl">
                                        <School />
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold text-white mb-2"> {t("programs.resources.title")}</h2>
                                    <p className="text-gray-300 text-sm">
                                    {t("programs.resources.description")}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <h1 className="font-bold sm:flex-row text-4xl text-center mt-20">{t("programs.aboutUs.title")}</h1>
            <article className="sm:flex items-center p-6">
                <img src={logo} className="sm:w-70" alt="" />
                <p className="text-base/relaxed font-stretch-extra-expanded">
                    A.C.A.P (Association Chinguitii Aide pour les Pauvres) is a non-profit organization dedicated to improving the lives of those in need. Our mission is to bring hope and support to underprivileged communities by providing essential services such as education, healthcare, clean water, and sustainable development projects.

                    At A.C.A.P, we believe that everyone deserves access to basic necessities, quality education, and proper medical care. That’s why we work tirelessly to build schools, pharmacies, and water supply systems, ensuring that vulnerable communities have the resources they need to thrive.

                    Our team is committed to creating a better future, one project at a time. Through collaboration with local and international partners, we aim to make a lasting impact and uplift those who need it most.

                    Join us in making a difference—together, we can build a brighter future for all.
                </p>
            </article>
            <h1 className='text-4xl my-9 text-center font-bold mx-auto'>Donation</h1>
            <article className='grid grid-cols-1 md:grid-cols-3'>
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
               {blogs.map(blog => 
                <Blog 
                content={blog.blog}
                image={blog.image.formats.thumbnail.url}
                author="test"
                title="if we dont test alot gonna happen"
                date="dang"
                />
               )}
                </div>
                <Blog 
                content={"if we dont test alot gonna happenif we dont test alot gonna happenif we dont test alot gonna happenif we dont test alot gonna happenif we dont test alot gonna happen"}
                image={school}
                author="test"
                title="if we dont test alot gonna happen"
                date="dang"
                />

            </section>
            <footer>
                <h1 className="text-4xl font-bold text-center my-4">Contact</h1>
            </footer>
        </main>


    )
}

