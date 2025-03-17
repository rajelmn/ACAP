import { Link } from "react-router-dom"
export interface blogObj {
    // blog: string,
    image: string,
    content: string,
    author: string,
    publishDate: string,
    title: string,
    lng: string,
    id: string, 

}


export function Blog({ image, content, author, publishDate, title, id }: blogObj) {

    return (
        <Link to={`/blog/${id}`}>
        <div className="blog p-4 rounded-2xl ">
            <img src={image} className="rounded-md w-full" alt=""  />
            <div className="blog-header flex justify-between items-center mt-2">
            <p className="text-xs md:text-sm font-semibold text-[#fd9c1d]">{author}</p>
            <p className="text-xs opacity-50">{publishDate}</p>
            </div>
            <h2 className="font-bold text-xl "> {title.length >40 ? title.slice(0,40)+"..." : title} </h2>
            <p className="text-sm opacity-70">
                {content.slice(0,75)}....
            </p>
            <p className="text-blue-400 text-xs opacity-65 mt-2">
                Read More 
            </p>
        </div>
        </Link>
    )
}