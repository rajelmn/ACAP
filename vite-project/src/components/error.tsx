import Header from "./header"

export default function Error() { 
    return(
        <>
        <Header showLang={false} />
        <div>
            <h2 className="text-center font-semibold text-3xl my-4">
                404
            </h2>
            <p className="mt-1 text-center">the requested page is not found in our servers , check the url and see if you mispelled it </p>
        </div>
        </>
    )
}