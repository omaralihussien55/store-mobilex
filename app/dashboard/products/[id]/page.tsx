import ProductDetails from '@/components/products/ProductDetails'
import React from 'react'

// }
const page = async ({params}:{params:{id:string}}) => {
    const { id } =await params
  return (
    <div>
      <ProductDetails id={id} />
    </div>
  )
}

export default page
