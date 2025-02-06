"use client"

import { useState } from "react"

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again later.')
      }

      setSuccess(true)
      setFormData({
        name: "",
        email: "",
        message: "",
        subject: "",
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {error && (
        <div className="rounded-lg bg-red-100 p-3 text-red-700">
          {error}
        </div>
      )}
      
      {success && (
        <div className="rounded-lg bg-green-100 p-3 text-green-700">
          Message sent successfully!
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-white">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="rounded-full bg-[#ffdec4] px-6 py-3 text-black"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          disabled={isLoading}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-white">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          className="rounded-full bg-[#ffdec4] px-6 py-3 text-black"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          disabled={isLoading}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-white">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="rounded-full bg-[#ffdec4] px-6 py-3 text-black"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          required
          disabled={isLoading}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-white">
          Your Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="rounded-3xl bg-[#ffdec4] px-6 py-3 text-black"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          disabled={isLoading}
        />
      </div>

      <button
        type="submit"
        className="w-32 rounded-full bg-[#f7730e] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#f7730e]/90 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Submit"}
      </button>
    </form>
  )
}