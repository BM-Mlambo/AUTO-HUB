"use client"
import { useState, useEffect } from "react"

export default function CarsPage() {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p className="text-green-700 text-lg md:text-xl font-medium">Loading cars...</p>
      </div>
    )
  }

  if (cars.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="text-5xl mb-4">🚗</div>
        <h2 className="text-xl font-bold text-gray-700 mb-2">No Cars Available</h2>
        <p className="text-gray-500 text-sm">Check back soon — new listings are added regularly.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#e8f5e9] to-[#f1f8e9] border-b border-green-100 px-4 md:px-8 py-10 md:py-14 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">Available Cars</h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">Browse our selection of quality vehicles</p>
      </div>

      {/* Cars Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-44 md:h-48 object-cover"
              />
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h2 className="text-base md:text-lg font-bold text-gray-800 leading-tight">{car.name}</h2>
                  <span className="text-green-700 font-bold text-sm whitespace-nowrap">
                    KSh {car.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs md:text-sm text-gray-500 mb-4">
                  <span className="bg-gray-50 border border-gray-100 px-2 py-1 rounded-md">{car.year}</span>
                  <span className="bg-gray-50 border border-gray-100 px-2 py-1 rounded-md">{car.mileage}</span>
                  <span className="bg-gray-50 border border-gray-100 px-2 py-1 rounded-md">{car.transmission}</span>
                </div>
                <a
                  href={`https://wa.me/254791696253?text=Hi, I am interested in the ${car.name} going for KSh ${car.price.toLocaleString()}. Is it still available?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition font-medium flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}