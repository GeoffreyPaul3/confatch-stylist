import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-center">About Confatch</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Confatch Atelier"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Confatch was born from a vision to blend the rich heritage of African textiles with the sophistication of Western fashion. Founded in Malawi, our brand stands as a testament to the beauty that emerges when cultures intertwine.
              </p>
              <p className="text-gray-600 mb-4">
                We believe in creating more than just clothing; we craft experiences, stories, and connections. Each piece in our collection is a celebration of craftsmanship, sustainability, and the vibrant spirit of Africa.
              </p>
              <Button asChild>
                <Link href="/consultation">Book a Consultation</Link>
              </Button>
            </div>
          </div>
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

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">Join the Confatch Family</h2>
          <p className="text-gray-600 mb-8">
            Experience the fusion of African heritage and Western luxury. Let&apos;s create something beautiful together.
          </p>
          <Button asChild size="lg">
            <Link href="/consultation">Book Your Personalized Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

