"use client"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { HandleAddCart, HandleFavorit, HandleProducts } from '@/redux/ProductSlice'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Heart} from 'lucide-react'
import CardItem from '../CardItem'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import SearchProduct from '../search/SearchProduct'

const Product = () => {
  const {products} = useAppSelector((state)=> state.products)
  const Dispatch  = useAppDispatch()
  
  useEffect(()=>{
    Dispatch(HandleProducts(""))
  },[])
  return (
    <>
     <h1 className='text-center p-2 my-3 font-extrabold text-2xl'>Products</h1>
    <SearchProduct />
  
    <div className='flex flex-wrap p-2 items-stretch'>
     { products.length > 0?products.map((item,idx)=>{
      return(
        <div key={idx}  className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-2  '>
          <div className='h-full w-[98.5%]'>
             <CardItem item={item} />
          </div>
        </div>
      )
     }):<div className='w-[70%] mx-auto p-3'>
     <Alert>
<AlertTitle className='text-orange-600'>Empty !</AlertTitle>
<AlertDescription className='flex items-center text-gray-500'>
<p className='mx-2'>You can add your favorite products here </p> 
</AlertDescription>
</Alert>
    </div>}
    </div>
     </>
  )
}

export default Product
