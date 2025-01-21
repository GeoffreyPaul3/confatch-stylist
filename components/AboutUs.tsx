import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


const AboutUs = () => {
  return (
    <>
     <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 font-playfair">Our Story</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/confatch/img-14.jpg"
                  alt="Confatch Atelier"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold mb-4 font-playfair">A Fusion of Cultures</CardTitle>
                </CardHeader>
                <p className="text-gray-700 mb-6 font-montserrat">
                Confatch, an bona fide luxurious fashion brand born in Malawi, highlight the essence of African culture and western culture, through textiles, accessories, and colours. 
                As a renowned stylist I don’t just create sculptures, but life stories because at the end of the day it’s not just about fashion but about the way we express ourselves and how we see the world. 
                </p>
                <p className="text-gray-700 mb-6 font-montserrat">
                  Every piece in our collection is a testament to the skill of our artisans, the quality of our materials, and the depth of our cultural roots. We don't just make clothes; we craft experiences, we weave dreams, and we dress the global citizen in the colors of Africa and the silhouettes of the West.
                </p>
                <p className="text-gray-700 font-montserrat">
                Each piece is a testament to the fusion of creativity and precision. 
                Through creative campaigns, editorial imagery, and captivating films, we want to convey a resounding global brand story. 
                Every thread, every stitch, every silhouette is a brushstroke in the masterpiece of CONFATCH.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
     </section>
    </>
  )
}

export default AboutUs
