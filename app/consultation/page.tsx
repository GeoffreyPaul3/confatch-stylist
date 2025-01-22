"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { DayPicker } from "react-day-picker";

export default function Consultation() {
  const [date, setDate] = useState<Date | undefined>(undefined);
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
        setName("");
        setEmail("");
        setPhone("");
        setDate(undefined);
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
    <main className="pt-16 sm:pt-24">
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
              Personal Styling Consultation
            </h1>
            <p className="text-md sm:text-lg text-muted-foreground">
              Let our expert stylists help you create a wardrobe that tells your unique story.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Name Field */}
            <div>
              <Label htmlFor="name" className="block text-sm font-medium leading-6">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-2"
              />
            </div>

            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="block text-sm font-medium leading-6">
                Email
              </Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="mt-2"
              />
            </div>

            {/* Phone Field */}
            <div>
              <Label htmlFor="phone" className="block text-sm font-medium leading-6">
                Phone Number
              </Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-2"
              />
            </div>

            {/* Consultation Type Radio Group */}
            <div>
              <Label className="block text-sm font-medium leading-6">Consultation Type</Label>
              <RadioGroup
                value={consultationType}
                onValueChange={setConsultationType}
                className="mt-2 space-y-2"
              >
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

            {/* Event Description */}
            <div>
              <Label htmlFor="event" className="block text-sm font-medium leading-6">
                Event (Optional)
              </Label>
              <Textarea
                id="event"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                className="mt-2"
              />
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message" className="block text-sm font-medium leading-6">
                Message
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-2"
              />
            </div>

            {/* Calendar */}
            <div>
              <Label htmlFor="date" className="block text-sm font-medium leading-6">
                Preferred Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full mt-2">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formattedDate || "Pick a Date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-2">
                  <DayPicker selected={date} onDayClick={setDate} />
                </PopoverContent>
              </Popover>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full sm:w-auto">
              Book Consultation
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
