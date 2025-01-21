'use client';

import { ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const collections = [
  {
    id: 1,
    name: 'Heritage Suit',
    price: '$899',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
    category: 'Suits'
  },
  {
    id: 2,
    name: 'Cultural Fusion Blazer',
    price: '$559',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80',
    category: 'Blazers'
  },
  {
    id: 3,
    name: 'Modern Print Shirt',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80',
    category: 'Shirts'
  },
  {
    id: 4,
    name: 'Tailored Trousers',
    price: '$389',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80',
    category: 'Trousers'
  }
];

export default function MenCollection() {
  return (
    <main>
      <section className="relative h-[70vh]">
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80"
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
          <div className="flex overflow-x-auto gap-4 pb-4 mb-8">
            {['All', 'Suits', 'Blazers', 'Shirts', 'Trousers'].map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item) => (
              <div key={item.id} className="group">
                <div className="relative h-[500px] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                  <p className="text-lg font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition"
            >
              Book Personal Styling Session
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}