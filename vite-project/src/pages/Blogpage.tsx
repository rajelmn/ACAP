import { useParams } from "react-router"
import { useState, useEffect } from "react";
import Header from "@/components/header";
import { blogObj } from "@/components/Blog";
import parse from "html-react-parser"
export default function BlogPage() {
    const {id} = useParams() ; 
    const [blog ,setBlog] = useState<blogObj>(); 
    console.log(id)
    useEffect(() => {
        async function getCurrentBlog() {
            try {
                const res = await fetch(`/api/blog/${id}`).then(res => res.json());
                console.log(res)
                setBlog(res)
            } catch(err) {
                console.log(err) ;
                return <h1>404</h1>
            }
        }

        getCurrentBlog()
    }, [])
    return(
        <div className="container-blog bg-[#cacaca] h-screen">
        <Header />
        <section className="px-4 flex flex-col bg-white items-center mx-4">
        <h1 className="text-3xl">{blog?.title}</h1>
        <p className="text-xs opacity-60">
            {blog?.publishDate}
        </p>
        <img src={blog?.image} className="rounded-lg max-h-[50vh]" alt="" />
        {blog?.content ? parse(blog.content) : ""}
        </section>
        </div>
    )
}