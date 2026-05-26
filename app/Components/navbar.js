"use client"
import { useEffect,useState,Fragment } from "react"
export default function Navbar(){
    const[user,setUser]=useState(null)
    useEffect(()=>{
        try{
            const loggedInuser=localStorage.getItem("user")
            if(!loggedInuser ||loggedInuser==="undefined")return
            setUser(JSON.parse(loggedInuser))
        }
        catch(error){
            console.log("invalid User in local storage")
            localStorage.removeItem("user")
        }
    },[])
    const getInitials=(email)=>{
        return email ? email.charAt(0).toUpperCase() : "?"
    }
    const handleLogout=()=>{
        localStorage.removeItem("user")
        window.location.href="/"
    }
    return(
        <nav className="flex justify-between items-center px-8 py-4 bg-green-50 border-b border-green-200">
            <h1 className="text-green-700 text-4xl font-bold">AutoHub</h1>
            <div className="flex gap-8">
                <a href="/" className="text-grey-700 hover:text-green-600">Home</a>
                <a href="/cars" className="text-grey-700 hover:text-green-600">Cars</a>
                <a href="/about" className="text-grey-700 hover:text-green-600">About</a>
                <a href="/contact" className="text-grey-700 hover:text-green-600">Contact</a>

            </div>
            <div className="flex items-center gap-4">
                {
                    user ? (
                        <Fragment>
                            <p className="text-grey-700 font-medium">Welcome, {user.name}</p>
                            <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                                {getInitials(user.email)}
                            </div>
                            <button onClick={handleLogout} className="text-red-600 font-medium">Log out</button>
                        </Fragment>
                    ):(
                        <Fragment>
                             <a href="/login" className="text-green-700 font-medium hover:text-green-900">Login</a>
                <a href="/signup" className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700 transition">Signup</a>

                            


                        </Fragment>
                    )

                }
               
            </div>

        </nav>
    )
}