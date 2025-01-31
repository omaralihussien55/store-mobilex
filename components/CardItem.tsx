import React, { FC } from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Heart } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import { useAppDispatch } from '@/redux/hooks'
import { HandleAddCart, HandleFavorit } from '@/redux/ProductSlice'
import { useRouter } from 'next/navigation'


interface CardItemProps {
    item:any
}
const CardItem:FC<CardItemProps> = ({item}) => {

    const Dispatch = useAppDispatch()
    const router = useRouter()
  return (
    <Card className='h-full w-full flex flex-col justify-between relative'>
    <div className="absolute top-2 right-2 cursor-pointer" onClick={()=> Dispatch(HandleFavorit(item.id))}>
      <Heart className={` ${item.fav?"text-red-600":"text-gray-400"}`}  />
    </div>
     <CardContent 
     onClick={()=>{
       router.push(`/dashboard/products/${item.id}`)
     }}
      className='flex  justify-center items-center'>
        <Image src={item.img} className='sm:max-w-[170px] max-h-[120px] mt-3' width={100} height={100} alt='' loading="lazy" />
     </CardContent>
     <CardHeader className=' p-2 '>
      <h5 className='mb-1 text-slate-700 text-sm '>{item.name}</h5>
      <div className='flex items-center justify-between'>
      <div >
        <span className='text-gray-600 mx-1'>{item.price}</span>
        <span className='text-green-400'>$</span>
      </div>
        <Button 
        onClick={()=> Dispatch(HandleAddCart(item.id))}
        className={`${item.inCart?"text-green-500":"text-gray-400"}`} variant={"ghost"}>{item.inCart?"inCard":"Add to card"}</Button>
      
      </div>
 
     </CardHeader>
   </Card>
  )
}

export default CardItem
