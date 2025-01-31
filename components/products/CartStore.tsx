import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { HandleAmount, HandleConfirmCart, HandleRemoveCart } from '@/redux/ProductSlice'
import { ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const CartStore = () => {
const {products} = useAppSelector(state=> state.products)
const [toggle,setToggle] = useState(false)
const router = useRouter()
const Dispatch =useAppDispatch()

  return (

    <div className="relative">
    <div className="absolute -top-3 -right-3 size-5 rounded-full flex items-center justify-center bg-red-700  text-sm text-white">
      {products.filter(i=> i.inCart == true).length}
      </div>
    <ShoppingCart className="cursor-pointer" onClick={()=> setToggle(!toggle)} />
    {(toggle && products.filter(i=> i.inCart == true).length > 0)&& <div className="absolute top-9 -left-80 rounded-lg w-80 bg-white shadow-lg z-50 ">
      <div className='p-2 h-80 overflow-y-scroll'>
      {  products.filter(i=> i.inCart == true).map((item,idx)=>{
           return(
            <div key={idx}  className='flex justify-between  mb-2 border p-1'>
                <div className='flex  gap-4'>
                <div className='size-10 rounded-full overflow-hidden'>
                  <Image src={item.img} className='w-full h-full object-contain' alt=''/>
              </div>

                <div>
                <h5 className='text-gray-600 text-sm'>{item.name}</h5>
                <div className='text-gray-400' >
                    <span className='mx-2'>{item.total}</span>
                    <span className='text-green-500'>$</span>
                </div>
               </div>
                </div>
           
            

               <div className='w-[20px]'>
                  <div className="cursor-pointer size-5 rounded-lg flex items-center justify-center bg-gray-200" onClick={()=> Dispatch(HandleAmount({type:"increase",id:item.id}))}>+</div>
                  <div className='text-gray-400 size-5 rounded-lg flex items-center justify-center'>{item.amount}</div>
                  <div className="cursor-pointer  size-5 rounded-lg flex items-center justify-center bg-gray-200" onClick={()=> Dispatch(HandleAmount({type:"decrease",id:item.id}))}>-</div>
               </div>

               <div className=' flex flex-col '>
                <Button onClick={()=> router.push(`/dashboard/products/${item.id}`)}  variant={"ghost"}>details</Button>
                <Button onClick={()=> Dispatch(HandleConfirmCart(item))}  className='text-green-500 p-1' variant={"ghost"}>confirm</Button>
                <Button onClick={()=> Dispatch(HandleRemoveCart(item.id))} className='text-red-500' variant={"ghost"}>remove</Button>
               </div>
            </div>
           )
      })}
      </div>
    </div>}
  </div>
   
  )
}

export default CartStore
