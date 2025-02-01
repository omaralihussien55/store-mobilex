import ProductDetails from '@/components/products/ProductDetails'
import React from 'react'

// }
const page = async ({params}) => {
    const { id } =await params
  return (
    <div>
      <ProductDetails id={id} />
    </div>
  )
}

export default page
