"use client"
import React from 'react'
import CardItem from '../CardItem'
import {  useAppSelector } from '@/redux/hooks'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const Favorite = () => {
    const {products} = useAppSelector((state)=> state.products)
     const router = useRouter()
    return (
      <>
       <h1 className='text-center p-2 my-3 font-extrabold text-2xl'>Favorite</h1>
  
      <div className='flex flex-wrap p-2 items-stretch'>
        
       {products.filter(i=>i.fav==true).length > 0 ? products.filter(i=>i.fav==true)?.map((item,idx)=>{
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
  <p className='mx-2'>You can add your favorite products here </p> <Button className='text-orange-600' variant={"link"} onClick={()=> router.push("/dashboard/products")}>add</Button>
  </AlertDescription>
</Alert>
        </div>}
      </div>
      </>
    )
}

export default Favorite
