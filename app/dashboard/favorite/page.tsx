import Favorite from '@/components/favorite/Favorite'
import React from 'react'

const page = ({p}:any) => {
  console.log(p,"pp")
  return (
    <div>
      <Favorite />
    </div>
  )
}

export default page
