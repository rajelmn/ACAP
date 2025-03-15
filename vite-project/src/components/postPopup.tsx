import { useEditor } from "@tiptap/react";
import { Tiptap } from "./Tiptap";
import React, { useState } from "react";
export default function PostPopup() {
    // The alert is probably for debugging - you can remove it when ready
    // alert("hey")
    const editor = useEditor();
    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement> ) {
        try {
            e.preventDefault() ;
            const reqObj = {content: editor?.getHTML()};
            const formData = new FormData();
            formData.append('file', e.target.image.files[0]);
            formData.append("content", JSON.stringify(reqObj))
            const res = await fetch("/api/blog", {
                method: "POST", 
                body: formData,
            })

            const response = await res.json() ; 
            console.log(response) ; 
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center z-10 bg-[#f5f5f574]">
            <div className="popup-container rounded-xl w-[80vw] max-w-4xl p-6 bg-white shadow-lg relative">
                <form onSubmit={handleFormSubmit}>
                    
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
                <input
                name="image"
                type="file" />
                <Tiptap />
                </form>
            </div>
        </div>
    );
}