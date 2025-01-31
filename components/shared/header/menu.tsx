import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='flex justify-end'>
       <nav className='flex gap-3 w-full'>
        <Link href={"/cart"} className='header-button'>
           <UserIcon className='h-8 w-8' />
           <span className='font-bold'>sign in</span>
        </Link>

        <Link href={"/cart"} className='header-button'>
           <ShoppingCartIcon className='h-8 w-8' />
           <span className='font-bold'>cart</span>
        </Link>
       </nav>
    </div>
  )
}

export default Menu
