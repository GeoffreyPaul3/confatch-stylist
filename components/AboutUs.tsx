import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle} from './ui/card';
import Link from 'next/link'

const AboutUs = () => {
  return (
    <>
       <section id="about" className="py-16 px-4 bg-brown-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-center">About Us</h2>
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <Image
                    src="/confatch/img-14.jpg"
                    alt="Confatch Atelier"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold mb-4 font-playfair">A Fusion of Cultures</CardTitle>
                  </CardHeader>
              <p className="text-gray-600 mb-4">
                Confatch was born from a vision to blend the rich heritage of African textiles with the sophistication of Western fashion. Founded in Malawi, our brand stands as a testament to the beauty that emerges when cultures intertwine.
              </p>
              <p className="text-gray-600 mb-5">
                We believe in creating more than just clothing; we craft experiences, stories, and connections. Each piece in our collection is a celebration of craftsmanship, sustainability, and the vibrant spirit of Africa.
              </p>
              <Button asChild className="bg-brown-600 hover:bg-brown-300 text-white">
                <Link href="/consultation">Book a Consultation</Link>
              </Button>
            </div>   
          </div>
          </CardContent>
        </Card>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Authenticity", description: "We stay true to our African roots while embracing global fashion trends." },
              { title: "Sustainability", description: "Our commitment to ethical sourcing and production is at the heart of everything we do." },
              { title: "Innovation", description: "We constantly push boundaries to create unique, forward-thinking designs." }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
