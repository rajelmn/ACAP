import Header from "@/components/header"
import { useState } from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navigate, useNavigate } from "react-router";
import { ReactFormState } from "react-dom/client";
import React from "react"
export default function LoginPage() {
    const [lang, setLang] = useState(""); 
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()
    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        try {
            e.preventDefault() ; 
            const form = e.target as HTMLFormElement;
            const nameField = form.elements.namedItem("name") as HTMLInputElement; 
            const passwordField = form.elements.namedItem("password") as HTMLInputElement; 

            const name = nameField.value; 
            const password = passwordField.value; 

            const res = await fetch("/api/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name, password})
            })
            if(res.ok) {
                return navigate("/admin")
            }
            const resObj = await res.json() ; 
            setErrorMessage(resObj.errorMessage)


        } catch(err) {
            console.log(err)
        }
    }
    return (    
        <div className="h-screen flex flex-col">
            <Header setLang={setLang} showLang={false} />

            <div className="grow flex justify-center items-center">
                <form 
                onSubmit={handleFormSubmit}
                onChange={() => setErrorMessage("")}
                className="max-w-[80vw] sm:w-[42vw] sm:p-12 p-5 rounded-lg my-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
                    <h1 className="font-sembold text-center text-3xl ">Login </h1>
                    <div className="space-y-4 self-center">
                        <Label htmlFor="name">Name: </Label>
                        <Input id="name" name="name" placeholder="Your name" />
                    </div>

                    <div className="mt-3 space-y-4">
                        <Label htmlFor="email">password: </Label>
                        <Input id="email" name="password" type="password" placeholder="enter your password" />
                    </div>
                    <div>
                        <Button className="w-full mt-8">
                            Login
                        </Button>
                    </div>

                {/* {errorMessage} */}
                {errorMessage && (<p className="text-[#d41818] mt-3">{errorMessage}</p>)}
                </form>
            </div>
        </div>
    )
}

