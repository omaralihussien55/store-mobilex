"use client"
import { cookie } from '@/lib/Cookies';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const Navbar = () => {
    const router = useRouter();
     
    // console.log(pathname)
  return (
    <>

       {cookie.get("login")?<></>:<nav className="p-3 shadow-md ">
          <ul className="flex gap-5 justify-center p-2 items-center">
          <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/auth/signup"}>Sign Up</Link></li>
            <li><Link href={"/auth/login"}>Login</Link></li>
          </ul>
        </nav>}
    </>
  )
}

export default Navbar
