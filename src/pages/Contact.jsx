import React, { useState } from "react"
import Title from "../components/Title"
import { assets } from "../assets/assets"
import { Loader2, Mail, User, MessageSquare } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isValidEmail(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("https://formspree.io/f/mwpnelzw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Redirecting...",
        })
        setFormData({ name: "", email: "", message: "" })

        // Redirect to Thank You page
        setTimeout(() => {
          window.location.href = "/thank-you"
        }, 1000)
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="px-6 md:px-16 lg:px-24">
      <div className="text-center text-3xl font-bold pt-10 border-t">
        <Title text1="CONTACT" text2="US" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 mb-28 items-center">
        {/* Left Side: Image */}
        <div className="flex-1">
          <img
            className="w-full rounded-2xl shadow-lg"
            src={assets.contact_img}
            alt="Contact"
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center gap-6 w-full">
          <p className="font-semibold text-2xl text-gray-700">Our Store</p>
          <p className="text-gray-500 leading-relaxed">
            560027 Bangalore <br /> Bangalore, Karnataka, India
          </p>
          <p className="text-gray-500">
            Tel: +918431676017 <br />
            Email:{" "}
            <span className="font-medium text-slate-800">
              mithungowdahc12a@gmail.com
            </span>
          </p>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 rounded-2xl shadow-lg border"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="inline w-4 h-4 mr-2 text-slate-600" />
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-slate-600 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="inline w-4 h-4 mr-2 text-slate-600" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-slate-600 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="inline w-4 h-4 mr-2 text-slate-600" />
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                disabled={isSubmitting}
                className="w-full px-4 py-2 border rounded-lg min-h-[120px] focus:ring-2 focus:ring-slate-600 disabled:bg-gray-100"
              />
            </div>

            {/* Error & Success Messages */}
            {submitStatus.type === "error" && (
              <p className="text-red-500 text-sm">{submitStatus.message}</p>
            )}
            {submitStatus.type === "success" && (
              <p className="text-green-600 text-sm">{submitStatus.message}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white shadow-lg hover:from-slate-800 hover:to-black transition-all duration-300 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
