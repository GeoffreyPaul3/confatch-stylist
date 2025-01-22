"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useToast } from "@/hooks/use-toast"

export default function Consultation() {
  const [date, setDate] = useState<Date | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [consultationType, setConsultationType] = useState("in-person")
  const [event, setEvent] = useState("")
  const [message, setMessage] = useState("")
  const { toast } = useToast()

  const formattedDate = date ? new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date) : null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/book-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          date: formattedDate,
          consultationType,
          phone,
          event,
          message,
        }),
      })

      if (response.ok) {
        toast({
          title: "Consultation Booked",
          description: "You'll receive a confirmation email shortly.",
        })
        // Reset form
        setName("")
        setEmail("")
        setPhone("")
        setDate(null)
        setConsultationType("in-person")
        setEvent("")
        setMessage("")
      } else {
        throw new Error("Failed to book consultation")
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to book consultation. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <main className="pt-24">
      <section className="py-16 px-4 bg-brown-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Personal Styling Consultation</h1>
            <p className="text-lg text-gray-600">
              Let our expert stylists help you create a wardrobe that tells your unique story.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    aria-label="Full Name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    aria-label="Email"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    aria-label="Phone Number"
                    required
                  />
                </div>

                <div>
                  <Label>Preferred Consultation Type</Label>
                  <RadioGroup value={consultationType} onValueChange={setConsultationType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="in-person" id="in-person" />
                      <Label htmlFor="in-person">In-Person</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="virtual" id="virtual" />
                      <Label htmlFor="virtual">Virtual</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                        aria-label="Pick a date"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formattedDate || <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date || undefined}
                        onSelect={(day) => setDate(day || null)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label htmlFor="event">Event Type (if any)</Label>
                  <Input
                    id="event"
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                    placeholder="e.g., Wedding, Corporate Event, etc."
                    aria-label="Event Type"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your style preferences, any specific requirements, or questions you have."
                    aria-label="Additional Information"
                    className="h-32"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                aria-label="Book Consultation"
                className="bg-brown-600 hover:bg-brown-300 text-white"
              >
                Book Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
