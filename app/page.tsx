import Link from 'next/link'
import Category from '@/components/Category'
import AboutUs from '@/components/AboutUs'
import Hero from '../components/Hero'
import Slideshow from '../components/SlideShow'
import { Button } from "@/components/ui/button"



const slideshowImages = [
  "/confatch/img-1.jpg",
  "/confatch/img-2.jpg", 
  "/confatch/img-3.jpg",
]


export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Category />
      <AboutUs />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold mb-8 text-center">Featured Collection</h2>
          <Slideshow images={ slideshowImages} />
          <div className="mt-8 text-center">
            <Button asChild className='bg-brown-600 hover:bg-brown-400'>
              <Link href="/collections">View All Collections</Link>

            </Button>
          </div>
        </div>
      </section>
    </div>
  </>
  )
}

