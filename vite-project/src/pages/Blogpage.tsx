import { useParams } from "react-router"
import { useState, useEffect } from "react";
import Header from "@/components/header";
import { blogObj } from "@/components/Blog";
import parse from "html-react-parser"
export default function BlogPage() {
    const {id} = useParams() ; 
    const [blog ,setBlog] = useState<blogObj>(); 
    const [lang, setLang] = useState("")
    console.log(lang)
    useEffect(() => {
        async function getCurrentBlog() {
            try {
                const res = await fetch(`/single-blog/${id}`).then(res => res.json());
                console.log(res)
                setBlog(res)
            } catch(err) {
                console.log(err) ;
                return <h1>404</h1>
            }
        }

        getCurrentBlog()
    }, [id])
    return (
       <>
          <Header setLang={setLang} showLang={false}/>
        <div className="container-blog max-w-5xl mx-auto">
          <article className="px-4 md:px-6 flex flex-col bg-white items-center mt-8 md:mt-10">
            {/* Title with proper hierarchy */}
            <h1 className="text-3xl md:text-4xl font-bold text-left w-full max-w-3xl">{blog?.title}</h1>
            
            {/* Metadata section */}
            <div className="w-full  max-w-3xl flex flex-wrap items-center text-gray-600 mt-2 mb-4">
              {blog?.author && (
                <div className="flex items-center mr-4 mb-2">
                  <span className="text-sm">{blog.author}</span>
                </div>
              )}
              {blog?.publishDate && (
                <div className="flex items-center mr-4 mb-2">
                  <span className="text-sm">{(blog.publishDate)}</span>
                </div>
              )}
              
            </div>
            
           {/* Featured image with matching padding as text */}
{blog?.image ? (
  <div className="w-full max-w-3xl">
    <img 
      src={blog.image} 
      className="rounded-lg block mt-3 w-full object-cover h-auto max-h-96" 
    />
  </div>
) : null}
            
            {/* Content with improved spacing */}
            <div className="my-8 px-4  blog blog-page max-w-3xl">
              {blog?.content ? parse(blog.content) : ""}
            </div>
    
          </article>
        </div>
        </>
      );
    }