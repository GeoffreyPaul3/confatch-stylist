"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Masonry from "react-masonry-css"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

// Define types for the props
interface GalleryItemProps {
  src: string
  onClick: () => void
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className="mb-4 cursor-pointer overflow-hidden rounded-lg shadow-md"
    onClick={onClick}
  >
    <Image
      src={src || "/placeholder.svg"}
      alt="gallery photo"
      width={1000}
      height={1000}
      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
    />
  </motion.div>
)

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

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
  ]

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  return (
    <section id="gallery" className="bg-gray-50">
      <div className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-12 mt-10 font-playfair">Gallery</h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {images.map((image, index) => (
            <GalleryItem
              key={index}
              src={image.src}
              onClick={() => {
                setLightboxIndex(index)
                setLightboxOpen(true)
              }}
            />
          ))}
        </Masonry>
      </div>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={images.map((img) => ({ src: img.src }))}
      />
    </section>
  )
}

export default Gallery

