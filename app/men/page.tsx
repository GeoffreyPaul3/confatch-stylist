'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const collections = [
  {
    id: 1,
    image: '/confatch/img-34.jpg',
  },
  {
    id: 2,
    image: '/confatch/img-27.jpg',
  },
  {
    id: 3,
    image: '/confatch/img-32.jpg',
  },
  {
    id: 4, 
    image: '/confatch/img-33.jpg',
  },
  {
    id: 5, 
    image: '/confatch/img-30.jpg',
  },
  {
    id: 6, 
    image: '/confatch/img-34.jpg',
  },
  {
    id: 7, 
    image: '/confatch/img-45.jpg',
  },
  
];

export default function MenCollection() {
  return (
    <main>
      <section className="relative h-[70vh]">
        <Image
          src="/confatch/img-30.jpg"
          alt="Men's Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            Men&apos;s Collection
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl">
            Where traditional craftsmanship meets modern sophistication
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
                    alt="men photo"
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