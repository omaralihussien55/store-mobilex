"use client"
import React from 'react'
import { Input } from '../ui/input'
import { useAppDispatch } from '@/redux/hooks'
import { HandleSearchProduct } from '@/redux/ProductSlice'

const SearchProduct = () => {
    const Dispatch = useAppDispatch()
  return (
    <div className='my-10 flex justify-center items-center p-2'>
        <Input  placeholder='search by name' className='w-1/2'  onChange={(e)=>{
            Dispatch(HandleSearchProduct(e.target.value))
        }} />
    </div>
  )
}

export default SearchProduct
