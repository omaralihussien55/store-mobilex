import ProductDetails from '@/components/products/ProductDetails'
import React from 'react'

// }
const page = async ({params}:any) => {
    const { id } =await params
  return (
    <div>
      <ProductDetails id={id} />
    </div>
  )
}

export default page
