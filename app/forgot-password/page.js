"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function ForgotPassword(){
    const router=useRouter()
    const[email, setEmail]=useState("")
    const[loading,setLoading]=useState(false)
    const handleSubmit=async (e)=>{
        e.preventDefault()
        setLoading(true)
        const res=await fetch("/api/forgot-password",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email
            })
        })
        const data=await res.json()
        setLoading(false)
        console.log(data)
        setEmail("")
        router.push(`/reset-password?email=${email}`)
    }
    return(
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-xl p-10 border rounded-lg shadow-sm">
                <h1 className="text-3xl font-bold text-green-700 text-center">Forgot Password</h1>
                <p className="text-center text-grey-600 mt-2">Enter your email address</p>
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                    <input
                    type="email"
                    placeholder="email address"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="border p-3 rounded-md placeholder-grey-500"
                    />
                    <button className="bg-green-600 text-white py-3 rounded-md">
                        {loading ? "checking...":"continue"}
                    </button>

                </form>

            </div>

        </div>
    )
}