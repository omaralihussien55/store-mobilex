"use client"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { HandleAddCart, HandleAmount, HandleGetItemDetails } from '@/redux/ProductSlice'
import React, { FC, useEffect } from 'react'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import Image from 'next/image'

const ProductDetails:FC<{id:string | number}> = ({id}) => {
const {itemDetails} = useAppSelector(state => state.products)
const dispach = useAppDispatch()
useEffect(()=>{
    dispach(HandleGetItemDetails(id))
},[])
  return (
   <>
    <div className='flex items-stretch  h-[350px] flex-wrap border rounded-lg w-[70%] mx-auto '>
      <div className='w-full sm:w-1/3 h-full'>
       <Image  src={itemDetails?.img} className='w-full h-full' alt='' />
      </div>
      <div className='w-full sm:w-2/3 rounded-lg h-full p-4'>
        <div className='flex flex-col justify-between items-stretch h-full'>
               <h3 className='text-slate-800 mb-2 p-1'>{itemDetails.name}</h3>
               <p className='mb-2 text-gray-600'>
                {itemDetails.disc}
               </p>
               <ul className='text-gray-500 text-sm'>
               <li className='mb-1  '><span className='mx-2'>price</span><span className='mx-2'>{itemDetails.price}</span><span className='text-green-500'>$</span></li>
                <li className='mb-1  '><span className='mx-2'>storage</span><span>{itemDetails.storage}</span></li>
                <li className='mb-1 '><span className='mx-2'>ram</span><span>{itemDetails.ram}</span></li>
                <li className='mb-1  '><span className='mx-2'>camera</span><span>{itemDetails.camera}</span></li>
                <li className='mb-1 '><span className='mx-2'>processor</span><span>{itemDetails.processor}</span></li>
               </ul>
               <div className="flex h-5 items-center space-x-4 text-sm ">
                     <div className="cursor-pointer" onClick={()=> dispach(HandleAmount({type:"decrease",id:id}))}>-</div>
                       <Separator orientation="vertical" />
                     <div>{itemDetails.amount}</div>
                       <Separator  orientation="vertical" />
                     <div className="cursor-pointer"  onClick={()=> dispach(HandleAmount({type:"increase",id:id}))}>+</div>
               </div>

               <div>
                 <Button  onClick={()=> dispach(HandleAddCart(itemDetails.id))} className={`w-full ${itemDetails.inCart?"text-green-600":""}`} variant={"secondary"}>{itemDetails.inCart?"inCart":"Add To Cart"}</Button>
                </div>
         </div>
     </div>
    </div>
   </>
  )
}

export default ProductDetails