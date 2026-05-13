"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { FaEye,FaEyeSlash } from "react-icons/fa"



export default function Signup(){
    const router=useRouter()
    const[name, setName]=useState("")
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const[showpassword,setShowpassword]=useState(false)
    const[loading,setLoading]=useState(false)

    const handleSubmit=async (e)=>{
        e.preventDefault()
        setLoading(true)
        //Collects all input values into one object.
        const formData={
            name,
            email,
            password,

        }
        //Sends data to the backend api
        const res=await fetch("/api/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
            
        })
        //Waits for response from the backend.
        const data=await res.json()
        console.log(data)
        //Clears the form after a succesful signup.
        setName("")
        setEmail("")
        setPassword("")
        //Redirect user to login page.
        router.push("/login")
    }
    return(
        <div className="flex justify-center items-center min-h-screen">
            <div  className="w-full max-w-xl p-10 border rounded-lg shadow-sm">
                <h1 className="text-3xl font-bold text-green-700 text-center">Create account</h1>
                <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder="full name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="border p-3 rounded-md placeholder-grey-500"
                    />

                    <input
                    type="email"
                    placeholder="email adress"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="border p-3 rounded-md placeholder-grey-500"
                    />
<div className="relative">
     <input
                    type={showpassword ? "text":"password"}
                    placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="border p-3 rounded-md placeholder-grey-500 w-full pr-10"
                    />
                    <button 
                    type="button"
                    onClick={()=>setShowpassword(!showpassword)}
                    className="absolute right-3 top-3 text-grey-600"
                    >
                        {showpassword ? <FaEyeSlash/> :<FaEye/>}

                    </button>
    
</div>
                   

                    <button className="bg-green-600 text-white py-3 rounded-md">
                        {loading ?"creating account...":"signup"}
                    </button>

                </form>
                <p className="text-center text-grey-600 mt-4">Already have an account?
                    <a href="/login" className="text-green-600 ml-1"> Login</a>
                </p>

            </div>

        </div>
    )
}