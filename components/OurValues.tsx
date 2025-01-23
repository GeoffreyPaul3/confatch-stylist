import React from 'react'

const OurValues = () => {
  return (
    <>
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

export default OurValues
