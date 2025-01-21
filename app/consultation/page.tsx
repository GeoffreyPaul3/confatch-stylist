"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Input } from "@/components/ui/input"; // Add this import
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // Add these imports
import { Textarea } from "@/components/ui/textarea"; // Add this import
import { ArrowRight } from "lucide-react"; // Add this import

export default function Consultation() {
  const [date, setDate] = useState<Date | DateRange | undefined>();

  const formatDate = (date: Date | DateRange | undefined) => {
    if (!date) return "Pick a date";
    if (Array.isArray(date)) {
      // Handle DateRange (start and end date)
      return `${format(date[0], "PPP")} - ${format(date[1], "PPP")}`;
    }
    return format(date, "PPP"); // Single date
  };

  return (
    <main className="pt-24">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Personal Styling Consultation</h1>
            <p className="text-lg text-gray-600">
              Let our expert stylists help you create a wardrobe that tells your unique story
            </p>
          </div>

          <form className="space-y-8 bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div>
                  <Label>Preferred Consultation Type</Label>
                  <RadioGroup defaultValue="in-person">
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
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formatDate(date)}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label htmlFor="event">Event Type (if any)</Label>
                  <Input id="event" placeholder="e.g., Wedding, Corporate Event, etc." />
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your style preferences, any specific requirements, or questions you have"
                    className="h-32"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="px-8" size="lg">
                Book Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </form>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">Personal Attention</h3>
              <p className="text-gray-600">One-on-one sessions with our expert stylists</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Style Analysis</h3>
              <p className="text-gray-600">Comprehensive assessment of your style preferences</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored recommendations for your lifestyle</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
