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
                    Confatch is a luxurious fashion brand born in Malawi, highlighting the fusion of African and Western culture through textiles, accessories, and colors. We believe that fashion is more than just clothing—it's a canvas for expressing who we are, telling our stories, and connecting with the world.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Our designs are crafted with precision and passion, using the finest materials and skilled artisans. Each collection is a masterpiece that embodies the creative fusion of tradition and modernity, bringing together the elegance of Africa and the sophistication of the West.
                  </p>
                  <p className="text-gray-700 mb-6 ">
                    Confatch isn’t just about fashion, it’s about creating experiences and empowering individuals to express their unique stories through style. Every thread, every stitch, every silhouette is a reflection of our commitment to craftsmanship and innovation.
                  </p>
                  <p className="text-gray-700 ">
                    With a legacy of over a decade, Confatch has become a premier fashion brand known for its blend of African luxury and Western elegance. Our visual identity reflects our commitment to timeless design, innovation, and cultural heritage.
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
