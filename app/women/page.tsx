import Image from 'next/image'
import Link from 'next/link'

export default function WomensCollection() {
  // This would typically come from your CMS or API
  const products = [
    { id: 1, name: 'African Print Dress', image: '/confatch/img-4.jpg' },
    { id: 2, name: 'Fusion Blazer', image: '/confatch/img-5.jpg' },
    { id: 3, name: 'African Print Dress', image: '/confatch/img-11.jpg' },
    { id: 4, name: 'Fusion Blazer', image: '/confatch/img-18.jpg' },
    
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Women&apos;s Collection</h1>
      <p className="text-xl text-center text-gray-700 mb-12">
        Ennoble Your Style with our Exquisite Women&apos;s Collection
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <Link href={`/product/${product.id}`} className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

