import React from 'react'
import Link from 'next/link';
import { Facebook, Instagram, Menu, Pointer as Pinterest } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from './ui/button';
import Image from 'next/image'

const Header = () => {
  return (
    <>
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold">
               <Image alt="logo" src="/confatch/confatch-logo.png" width={60} height={70}/>
              </Link>
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                <Link href="/women" className="hover:text-primary transition">
                  Women
                </Link>
                <Link href="/men" className="hover:text-primary transition">
                  Men
                </Link>
                <Link href="/gallery" className="hover:text-primary transition">
                  Gallery
                </Link>
                <Link href="/blog" className="hover:text-primary transition">
                  Blog
                </Link>
                <Link href="/about" className="hover:text-primary transition">
                  About
                </Link>
                <Link 
                  href="/consultation"
                  className=" text-white px-4 py-2 rounded-md bg-brown-600 hover:bg-brown-300 transition"
                >
                  Book Consultation
                </Link>
              </div>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-10 w-10">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                      <SheetTitle className="text-left">Menu</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-4 mt-8">
                      <Link 
                        href="/women" 
                        className="text-lg font-medium py-2 hover:text-primary transition"
                      >
                        Women
                      </Link>
                      <Link 
                        href="/men" 
                        className="text-lg font-medium py-2 hover:text-primary transition"
                      >
                        Men
                      </Link>
                      <Link 
                        href="/gallery" 
                        className="text-lg font-medium py-2 hover:text-primary transition"
                      >
                        Gallery
                      </Link>
                      <Link 
                        href="/blog" 
                        className="text-lg font-medium py-2 hover:text-primary transition"
                      >
                        Blog
                      </Link>
                      <Link 
                        href="/about" 
                        className="text-lg font-medium py-2 hover:text-primary transition"
                      >
                        About
                      </Link>
                      <div className="pt-4">
                        <Link 
                          href="/consultation"
                          className="inline-block w-full bg-primary text-white text-center px-4 py-3 rounded-full hover:bg-opacity-90 transition"
                        >
                          Book Consultation
                        </Link>
                      </div>
                      <div className="pt-8 flex gap-6">
                        <a href="#" className="text-gray-600 hover:text-primary transition">
                          <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-primary transition">
                          <Instagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-primary transition">
                          <Pinterest className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </nav>
        </header>

    </>
  )
}

export default Header
