import { Button } from "@/components/ui/button"
import { Editor } from "@tiptap/react";
import { Tiptap } from "../Tiptap";
import React, { useState } from "react";
import {MoonLoader} from "react-spinners";
import Lang from "../lang";
import { createPortal } from "react-dom";


export default function PostPopup({ setIsPosting }: { setIsPosting: (arg: boolean) => void }) {
    const [lang, setLang] = useState<string>("");
    const [editor, setEditor] = useState<Editor | null>(null);
    const [loading, setLoading] = useState<boolean>(false); 
    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        console.log(editor?.getHTML())
        try {
            e.preventDefault();
            setLoading(true)
            const form = e.target as HTMLFormElement; 
            const titleField = form.elements.namedItem("title") as HTMLInputElement; 
            const imageInput = form.elements.namedItem("image") as HTMLInputElement; 
            const date = new Date();
            const reqObj = {
                content: editor?.getHTML(),
                author: "braims",
                publishDate: date.toDateString(),
                id: crypto.randomUUID(),
                title: titleField.value,
                lng: lang || "en",
            };
            const formData = new FormData();
            if(imageInput.files && imageInput.files.length > 0 ) {
                formData.append('file',imageInput.files[0]);
            }
            formData.append("content", JSON.stringify(reqObj))
            const res = await fetch("/api/blog", {
                method: "POST",
                body: formData,
            })

            const response = await res.json();
            console.log(response);
            if(res.ok){
                setLoading(false) ; 
                setIsPosting(false) ; 
            };
        }
        catch (err) {
            console.log(err)
        }
    }

    function handleLanguageChange(language: string) {
        console.log(language);
        setLang(language);
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-800/50 backdrop-blur-sm">
            <div className="popup-container h-screen overflow-y-scroll rounded-xl w-[90vw] max-w-3xl p-8 bg-white shadow-xl relative">

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Create New Post</h2>
                    <button
                        type="button"
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    // onClick={onClose}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                <Lang handleLanguageChange={handleLanguageChange}/>

                    <div className="mb-6">
                        <label htmlFor="post-title" className="block text-sm font-medium text-gray-700 mb-1">
                            Post Title
                        </label>
                        <input
                            id="post-title"
                            name="title"
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="Enter an engaging title for your post"
                            required
                        />
                            {/* <MoonLoader className="mx-auto absolute "/> */}
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-dashed border-gray-300 rounded-lg bg-gray-50">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                        </div>
                        <div className="flex-1">
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                                Upload Cover Image
                            </label>
                            <input
                                id="image"
                                name="image"
                                type="file"
                                accept="image/*"
                                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                                required
                            />
                            {/* <p className="mt-1 text-xs text-gray-500">Recommended size: 1200×630 pixels</p> */}
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="p-4 bg-gray-50 border-b border-gray-200">
                            <h3 className="font-medium text-gray-700">Post Content</h3>
                        </div>
                        <div className="p-4">
                            <Tiptap setEditor={setEditor} />
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            type="button"
                            onClick={() => setIsPosting(false)}
                            className="px-4 cursor-pointer py-1 mr-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                        >
                            Cancel
                        </button>

                                <Button type="submit">Publish Post</Button>
                            
                    </div>
                </form>
            <LoadingOverlay loading={loading}/>
            </div>

        </div>
    );
}


export const LoadingOverlay = ({ loading }: { loading: boolean }) => {
    if (!loading) return null;
    
   
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-[#f6f6f68c] z-[9999]">
      <MoonLoader color="#0293e0" loading={loading} size={60} />
    </div>,
    document.body // This renders the overlay directly as a child of the body
  );
}



