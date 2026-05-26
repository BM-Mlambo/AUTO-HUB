import Chatbot from "./Components/chatbot"
export default function Home(){
  return(
    <div className="flex flex-col items-center pt-12 min-h-screen">
      <h1 className="text-green-600 text-4xl font-bold">Welcome to Auto Hub</h1>
      <p className="text-gray-600 mt-5 italic">We sell quality, trusted and affordablle vehicles.</p>
      <Chatbot/>

    </div>
  )
}