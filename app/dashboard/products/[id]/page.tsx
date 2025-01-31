import ProductDetails from '@/components/products/ProductDetails'
import React from 'react'

// interface Params {
//     params:{
//         id:string | number
//     }
// }
const page = async ({params}:any) => {
    console.log(params,"params")
    const { id } =await params
  return (
    <div>
      <ProductDetails id={id} />
    </div>
  )
}

export default page
