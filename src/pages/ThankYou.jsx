import React, { useEffect } from "react"
import { CheckCircle2 } from "lucide-react"

const ThankYou = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/"
    }, 6000) // 6 seconds redirect
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6">
      <CheckCircle2 className="text-green-600 w-20 h-20 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Thank You!</h1>
      <p className="text-gray-600">
        Your message has been sent successfully. <br />
        You will be redirected to the homepage shortly...
      </p>
    </div>
  )
}

export default ThankYou
