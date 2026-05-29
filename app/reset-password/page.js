"use client"
import { useState, Suspense } from "react"
import { useRouter } from "next/navigation"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useSearchParams } from "next/navigation"

function ResetPasswordForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get("email")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showpassword, setShowpassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }
    setLoading(true)
    const res = await fetch("/api/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    console.log(data)
    localStorage.setItem("user", JSON.stringify(data.user))
    setLoading(false)
    setPassword("")
    setConfirmPassword("")
    window.location.href = "/"
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xl p-10 border rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-green-700 text-center">Reset Password</h1>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="relative">
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 rounded-md placeholder-gray-500 w-full pr-10"
            />
            <button
              type="button"
              onClick={() => setShowpassword(!showpassword)}
              className="absolute right-3 top-3 text-gray-600"
            >
              {showpassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border p-3 rounded-md placeholder-gray-500"
          />
          <button className="bg-green-600 text-white py-3 rounded-md">
            {loading ? "Updating..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-green-700">Loading...</p>
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  )
}