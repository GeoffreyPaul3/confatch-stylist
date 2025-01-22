'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const collections = [
  {
    id: 1,
    image: '/confatch/img-19.jpg',
    category: 'Evening Wear'
  },
  {
    id: 2,
    image: '/confatch/img-22.jpg',
    category: 'Dresses'
  },
  {
    id: 3,
    image: '/confatch/img-20.jpg',
    category: 'Outerwear'
  },
  {
    id: 4,
    image: '/confatch/img-5.jpg',
    category: 'Dresses'
  },
  {
    id: 5,
    image: '/confatch/img-10.jpg',
    category: 'Outerwear'
  },
  {
    id: 6,
    image: '/confatch/img-13.jpg',
    category: 'Outerwear'
  },
  {
    id: 7,
    image: '/confatch/img-15.jpg',
    category: 'Outerwear'
  },
  {
    id: 8,
    image: '/confatch/img-16.jpg',
    category: 'Outerwear'
  },
  {
    id: 9,
    image: '/confatch/img-4.jpg',
    category: 'Outerwear'
  },

];

export default function WomenCollection() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <Image
          src="/confatch/img-4.jpg"
          alt="Women's Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            Women&apos;s Collection
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl">
            Discover the perfect blend of African heritage and contemporary elegance
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item) => (
              <div key={item.id} className="group">
                <div className="relative h-[500px] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={item.image}
                    alt="women photo"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
          <Button asChild className="bg-brown-600 hover:bg-brown-300 text-white">
            <Link
              href="/consultation"
            >
              Book Personal Styling Session
              <ArrowRight className="w-4 h-4" />
            </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}