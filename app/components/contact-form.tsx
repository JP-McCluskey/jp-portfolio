"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContactForm } from "../actions"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(formData: FormData) {
    setPending(true)
    setMessage("")
    setError("")

    // Basic client-side validation
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const messageContent = formData.get("message") as string

    if (!name || !email || !messageContent) {
      setError("Please fill out all fields.")
      setPending(false)
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.")
      setPending(false)
      return
    }

    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("An unexpected error occurred. Please try again later.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-6">
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea id="message" name="message" required />
        </div>
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && <p className="text-sm text-center mt-4 text-green-600 dark:text-green-400">{message}</p>}
        {error && <p className="text-sm text-center mt-4 text-red-600 dark:text-red-400">{error}</p>}
      </form>
    </Card>
  )
}

