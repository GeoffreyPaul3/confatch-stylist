"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CalendarIcon } from "lucide-react"; // Removed ArrowRight since it was not being used
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { DayPicker } from "react-day-picker";

export default function Consultation() {
  const [date, setDate] = useState<Date | undefined>(undefined); // Change to undefined to avoid `null` assignment issue
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consultationType, setConsultationType] = useState("in-person");
  const [event, setEvent] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const formattedDate = date ? new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date) : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      });

      if (response.ok) {
        toast({
          title: "Consultation Booked",
          description: "You'll receive a confirmation email shortly.",
        });
        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setDate(undefined); // Reset to undefined instead of null
        setConsultationType("in-person");
        setEvent("");
        setMessage("");
      } else {
        throw new Error("Failed to book consultation");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to book consultation. Please try again.",
        variant: "destructive",
      });
    }
  };

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

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {/* Consultation Type Radio Group */}
            <div>
              <Label>Consultation Type</Label>
              <RadioGroup value={consultationType} onValueChange={setConsultationType}>
                <RadioGroupItem value="in-person">
                  <Label>In-Person</Label>
                </RadioGroupItem>
                <RadioGroupItem value="virtual">
                  <Label>Virtual</Label>
                </RadioGroupItem>
              </RadioGroup>
            </div>

            {/* Event Description */}
            <div>
              <Label htmlFor="event">Event (Optional)</Label>
              <Textarea
                id="event"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
              />
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            {/* Calendar */}
            <div>
              <Label htmlFor="date">Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formattedDate || "Pick a Date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  {/* Updated to onDayClick instead of onDateChange */}
                  <DayPicker selected={date} onDayClick={setDate} />
                </PopoverContent>
              </Popover>
            </div>

            <Button type="submit">Book Consultation</Button>
          </form>
        </div>
      </section>
    </main>
  );
}
