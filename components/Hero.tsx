'use client'

import { TypeAnimation } from 'react-type-animation'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[1000px] bg-[url('/confatch/img-12.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
        <motion.h1 
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CONFATCH Stylist
        </motion.h1>
        <motion.div 
          className="h-16 sm:h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              'Where African Heritage Meets Western Luxury',
              2000,
              'Elegance Redefined',
              2000,
              'Timeless Fashion, Endless Stories',
              2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-xl sm:text-2xl mb-8"
            repeat={Infinity}
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button asChild className="bg-brown-600 hover:bg-brown-300 text-white">
            <Link href="/consultation">Book Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

