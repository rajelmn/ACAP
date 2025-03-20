

export default function Card({image , number}: {image: string, number: string}) {

    return(
        <div className="force-ltr p-2 w-56 md:w-70 py-8 rounded-2xl mx-auto flex flex-col items-center justify-center shadow-class my-4">
            <img src={image} className="w-40 md:w-35 " alt="" />
            <p className="mt-2 text-2xl">{number}</p>
        </div>
    )
}