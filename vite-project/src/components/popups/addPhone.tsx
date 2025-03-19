
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { LoadingOverlay } from "./postPopup"
import { PhoneNumber } from "../dashboard"

export default function AddPhone({setPhoneNumbers} : {setPhoneNumbers: (arg: PhoneNumber[]) => void}) {
    const [loading, setLoading] = useState<boolean>(false) ; 
    const [open ,setOpen] = useState(false)

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
            try {
                const form = e.target as HTMLFormElement; 
                const imageInput = form.elements.namedItem("image") as HTMLInputElement; 
                const numberField = form.elements.namedItem("number") as HTMLInputElement; 
                const id: string = crypto.randomUUID()
                e.preventDefault();
                setLoading(true)
                // const date = new Date();
                const reqObj = {
                   phone: numberField.value, 
                   id,
                };
                const formData = new FormData();
                if(imageInput.files && imageInput.files.length > 0 ) {
                    formData.append('file',imageInput.files[0]);
                }
                // formData.append('file', e.target.image.files[0]);
                formData.append("content", JSON.stringify(reqObj))
                const res = await fetch("/api/phone", {
                    method: "POST",
                    body: formData,
                })
    
                const response = await res.json();
                if(res.ok) {
                    const { date }: { date: string } = response; 
                    setLoading(false) ; 
                    setOpen(false); 
                    setPhoneNumbers((prev: PhoneNumber[]) => 
                    [...prev, {number: numberField.value, id, date, image: "djdj"} ]
                    )
                }
                console.log(response);
            }
            catch (err) {
                console.log(err)
            }
        }
    return (
        <>
                    <LoadingOverlay loading={loading} />
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"> Add Project</button>
                    {/* <Button variant="outline">Edit Profile</Button> */}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Phone number</DialogTitle>
                        <DialogDescription>
                            upload a new Phone number
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleFormSubmit}>
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
                                        Upload Image
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
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    number:
                                </Label>
                                <Input
                                    id="phone-number"
                                    //   defaultValue="Pedro "
                                    type="numberdh"
                                    name="number"
                                    placeholder="phone number"
                                    className="col-span-3"
                                />
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



