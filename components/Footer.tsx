import { Facebook, Instagram} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
  <footer className="bg-brown-900 text-white py-16">
     <div className="max-w-6xl mx-auto px-4">
     <div className="grid md:grid-cols-4 gap-8">
    <div>
      <Image src="/confatch/confatch.png" alt="logo" width={70} height={70} className="mb-4 filter invert"/>
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
      </div>
    </div>
    <div>
      <h4 className="font-bold mb-4">Contact</h4>
      <div className="flex flex-col gap-2 text-gray-400">
        <p>Email: constancemnelemba@yahoo.com</p>
        <p>Phone: +49 176 22034365</p>
        <p>Location: Germany</p>
      </div>
    </div>
    <div>
      <h4 className="font-bold mb-4">Follow Us</h4>
      <div className="flex gap-4">
        <a href="https://www.facebook.com/shanty.tee.587" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <Facebook className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/confatch" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <Instagram className="w-6 h-6" />
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
