'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prevState => ({ ...prevState, eventType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', eventType: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Select onValueChange={handleSelectChange} value={formData.eventType}>
        <SelectTrigger>
          <SelectValue placeholder="Select Event Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="fashion-week">Fashion Week</SelectItem>
          <SelectItem value="corporate-event">Corporate Event</SelectItem>
          <SelectItem value="special-celebration">Special Celebration</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
      <Textarea
        name="message"
        placeholder="Tell us about your style preferences and event details"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button type="submit">Request Consultation</Button>
    </form>
  )
}

