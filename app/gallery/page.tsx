"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card"; 

// Define types for the props
interface GalleryItemProps {
  src: string; // src is expected to be a string
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className="group"
  >
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-64 md:h-80">
          <Image
            src={src || "/placeholder.svg"}
            alt="gallery photo"
            width={1000}
            height={1000} 
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Gallery = () => {
  const images = [
    { src: "/confatch/img-4.jpg" },
    { src: "/confatch/img-7.jpg" },
    { src: "/confatch/img-20.jpg" },
    { src: "/confatch/img-19.jpg" },
    { src: "/confatch/img-16.jpg" },
    { src: "/confatch/img-30.jpg" },
    { src: "/confatch/img-14.jpg" },
    { src: "/confatch/img-8.jpg" },
    { src: "/confatch/img-10.jpg" },
    { src: "/confatch/img-29.jpg" },
    { src: "/confatch/img-28.jpg" },
    { src: "/confatch/img-34.jpg" },
  ];

  return (
    <section id="gallery" className="bg-gray-50">
      <div className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-12 mt-10 font-playfair">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <GalleryItem key={index} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
