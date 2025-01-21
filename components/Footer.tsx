import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
  <footer className="bg-brown-900 text-white py-16">
     <div className="max-w-6xl mx-auto px-4">
     <div className="grid md:grid-cols-4 gap-8">
    <div>
      <h3 className="text-xl font-bold mb-4">CONFATCH Stylist</h3>
      <p className="text-gray-400">
        Harmonizing African and Western culture through exquisite fashion.
      </p>
    </div>
    <div>
      <h4 className="font-bold mb-4">Quick Links</h4>
      <div className="flex flex-col gap-2">
        <Link href="/women" className="text-gray-400 hover:text-white transition">
          Women&apos;s Collection
        </Link>
        <Link href="/men" className="text-gray-400 hover:text-white transition">
          Men&apos;s Collection
        </Link>
        <Link href="/gallery" className="text-gray-400 hover:text-white transition">
          Gallery
        </Link>
        <Link href="/blog" className="text-gray-400 hover:text-white transition">
          Blog
        </Link>
      </div>
    </div>
    <div>
      <h4 className="font-bold mb-4">Contact</h4>
      <div className="flex flex-col gap-2 text-gray-400">
        <p>Email: contact@confatch.com</p>
        <p>Phone: +265 999 999 999</p>
        <p>Location: Lilongwe, Malawi</p>
      </div>
    </div>
    <div>
      <h4 className="font-bold mb-4">Follow Us</h4>
      <div className="flex gap-4">
        <a href="#" className="text-gray-400 hover:text-white transition">
          <Facebook className="w-6 h-6" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
          <Twitter className="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
  <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
    <p>&copy; {new Date().getFullYear()} Confatch Stylist. All rights reserved.</p>
  </div>
   </div>
</footer>
</>
  )
}
