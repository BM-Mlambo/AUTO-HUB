"use client"
import { useState, Fragment } from "react"
import { FaCommentDots,FaTimes } from "react-icons/fa"
export default function Chatbot(){
    const[messages, setmessages]=useState([])
    const[input,setinput]=useState("")
    const[open,setopen]=useState(false)
    const sendMessage=async ()=>{

        if(!input.trim())return
        const newMessages=[...messages,{role:"user",text:input}]
        setmessages(newMessages)
        const res=await fetch("/api/chat",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                message:input
            })
        })
        const data=await res.json()
        setmessages([...newMessages,{role:"bot",text:data.reply}])
        setinput("")
    }
    return(
        <Fragment>
            <button onClick={()=>setopen(!open)} className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-full shadow-lg">

                {open ?<FaTimes/> :<FaCommentDots/>}
            </button>
            {open && (
                <div className="fixed bottom-20 right-5 w-80 bg-white border rounded-lg shadow-xl p-3">
                    <div className="h-64 overflow-y-auto mb-3 text-sm">
                        {messages.map((msg,i)=>(
                            <div key={i} className={`flex my-1 ${msg.role==="user" ? "justify-end":"justify-start"}`}>
                                <p className={`px-3 py-2 rounded-md max-w-[75%] ${
                                    msg.role==="user" ? "bg-green-600 text-white":"bg-grey-200 text-black"
                                }`}>
                                    {msg.text}
                                </p>

                            </div>
                        ))}

                    </div>
                    <div className="flex gap-2">
                        <input
                        value={input}
                        onChange={(e)=>setinput(e.target.value)}
                        placeholder="type a message..."
                        className="border p-2 flex-1 rounded-md text-black"
                        />
                        <button onClick={sendMessage} className="bg-green-600 text-white px-3 rounded-md">Send</button>

                    </div>
                    

                </div>

            )}
        </Fragment>
    )
}