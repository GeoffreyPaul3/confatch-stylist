import Link from 'next/link'
import Category from '@/components/Category'
import AboutUs from '@/components/AboutUs'
import Hero from '../components/Hero'
import Slideshow from '../components/SlideShow'
import { Button } from "@/components/ui/button"
import OurValues from '@/components/OurValues'



const slideshowImages = [
  "/confatch/img-4.jpg",
  "/confatch/img-20.jpg", 
  "/confatch/img-10.jpg",
  "/confatch/img-13.jpg", 
  "/confatch/img-12.jpg",
  "/confatch/img-32.jpg", 
  "/confatch/img-7.jpg",
  "/confatch/img-43.jpg",
  "/confatch/img-41.jpg",
  "/confatch/img-45.jpg",
  "/confatch/img-27.jpg",
  "/confatch/img-11.jpg", 
  "/confatch/img-19.jpg",
  "/confatch/img-37.jpg",
  "/confatch/img-47.jpg",
  "/confatch/img-38.jpg",
  "/confatch/img-49.jpg",

  
]


export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Category />
      <AboutUs />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brown-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold mb-8 text-center">Featured Collection</h2>
          <Slideshow images={ slideshowImages} />
          <div className="mt-8 text-center">
            <Button asChild className='bg-brown-600 hover:bg-brown-400'>
              <Link href="/gallery">View All Collections</Link>
            </Button>
          </div>        
        </div>
      </section>
      
        <OurValues />

      <section className="py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">Join the Confatch Family</h2>
          <p className="text-gray-600 mb-8">
            Experience the fusion of African heritage and Western luxury. Let&apos;s create something beautiful together.
          </p>
          <Button asChild size="lg"  className="bg-brown-600 hover:bg-brown-300 text-white">
            <Link href="/consultation">Book Your Personalized Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  </>
  )
}


