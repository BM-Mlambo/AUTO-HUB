"use client"
import { useState, useEffect } from "react"
export default function CarsPage(){
    const [cars, setCars]=useState([])
    const [loading, setloading]=useState(true)
    useEffect(()=>{
        fetch("/api/cars")
        .then((res)=>res.json())
        .then((data)=>{
            setCars(data)
            setloading(false)
        })
    },[])
    if(loading){
        return(
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-green-700 text-xl font-medium">loading cars...</p>

            </div>
        )
    }
    return(
        <div className="min-h-screen bg-gray-50 px-8 py-10">
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-green-700">Available Cars</h1>
                <p className="text-gray-500 mt-2">Browse our selection of quality vehicles</p>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cars.map((car)=>(
                    <div key={car.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                        <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-48 object-cover"
                        />
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-3">
                                <h2 className="text-lg font-bold text-gray-800"> {car.name}</h2>
                                <span className="text-green-700 font-bold text-sm">
                                    ksh {car.price.toLocaleString()}
                                </span>

                            </div>
                            <div className="flex gap-3 text-sm text-gray-500 mb-4">
                                <span>{car.year}</span>
                                <span>{car.mileage}</span>
                                <span>{car.transmission}</span>

                            </div>
                            <a 
                            href={`https://wa.me/254791696253?text=Hi,I am intrested in the ${car.name} going for ksh ${car.price.toLocaleString()}. Is it still available?`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition font-medium flex items-center justify-center gap-2"
                            
                            >Chat on Whatsapp

                            </a>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}