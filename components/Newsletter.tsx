"use client";

import { Sparkles, Mail } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <Sparkles className="w-12 h-12 mx-auto mb-6 text-[#2D2D2D]" />
            <h2 className="text-4xl font-serif font-bold mb-4">Stay in Style</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for exclusive offers, style updates, and fashion inspiration.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full"
                  required
                />
              </div>
              <Button type="submit" className="rounded-full bg-black text-white hover:bg-black/90">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
