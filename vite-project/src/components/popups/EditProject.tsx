
// import
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { LoadingOverlay } from "./postPopup"
import Lang from "../lang"
import { Project } from "../dashboard"

export default function EditProjects({project}: {project: Project}) {
    const [lang, setLang] = useState("");
    const [loading, setLoading] = useState<boolean>(false) ; 
    function handleLanguageChange(language: string) {
        setLang(language)
    }

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
            try {
                const form = e.target as HTMLFormElement; 
                const titleField = form.elements.namedItem("title") as HTMLInputElement; 
                const imageInput = form.elements.namedItem("image") as HTMLInputElement; 
                const descriptionField = form.elements.namedItem("description") as HTMLInputElement; 
                const costField = form.elements.namedItem("cost") as HTMLInputElement; 
                // alert(costField.value)
                e.preventDefault();
                setLoading(true)
                const date = new Date();
                const reqObj = {
                    description: descriptionField.value,
                    cost: +costField.value,
                    publishDate: date.toDateString(),
                    id: project.id,
                    title: titleField.value,
                    lng: lang || "en",
                };
                const formData = new FormData();
                if(imageInput.files && imageInput.files.length > 0 ) {
                    formData.append('file',imageInput.files[0]);
                }
                // formData.append('file', e.target.image.files[0]);
                formData.append("content", JSON.stringify(reqObj))
                const res = await fetch("/api/project", {
                    method: "put",
                    body: formData,
                })
    
                // const response = await res.json();
                if(res.ok) setLoading(false); 
                setTimeout(() => {
                    setLoading(false); 
                    alert('timeout')
                }, 30000)
                // console.log(response);
            }
            catch (err) {
                console.log(err)
            }
        }
    return (
        <>
                    <LoadingOverlay loading={loading} />
            <Dialog>
                <DialogTrigger asChild>
                <button className="text-blue-600 hover:text-blue-800 font-medium mr-3 transition-colors">Edit</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit projects</DialogTitle>
                        <DialogDescription>
                            upload a new project
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleFormSubmit}>
                     <Lang handleLanguageChange={handleLanguageChange} />
                        <div className="grid gap-4 py-4">
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
                                        Upload Icon
                                    </label>
                                    <input
                                        id="image"
                                        name="image"
                                        type="file"
                                        accept="image/*"
                                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                                    />
                                    {/* <p className="mt-1 text-xs text-gray-500">Recommended size: 1200×630 pixels</p> */}
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    name:
                                </Label>
                                <Input
                                    id="name"
                                      defaultValue={project.title}
                                    name="title"
                                    placeholder="project name"
                                    className="col-span-3"
                                />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    cost:
                                </Label>
                                <Input
                                    id="username"
                                      defaultValue={project.cost}
                                    type="number"
                                    name="cost"
                                    placeholder="project cost en MRU"
                                    className="col-span-3"
                                />
                            </div>

                            <div className="grid w-full gap-2">
                                <Label htmlFor="message-2">description: </Label>
                                <Textarea 
                                name="description"
                                defaultValue={project.description}
                                placeholder="Type your project description here" id="message-2" />

                            </div>

                        </div>

                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}



