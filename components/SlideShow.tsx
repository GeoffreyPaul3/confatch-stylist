'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface SlideshowProps {
  images: string[];
  interval?: number;
}

export default function Slideshow({ images, interval = 4000 }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-[600px] xl:h-[1200px] overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Slideshow image ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-400 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
