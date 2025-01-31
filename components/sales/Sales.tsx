"use client"
import React, { FC } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useAppSelector } from '@/redux/hooks'


const Sales = () => {
    const {sales} = useAppSelector(state=> state.products)
  return (
    <div className='mt-10  mx-auto'>
      <h1 className='text-center p-2 my-3 font-extrabold text-2xl'>Sales</h1>
      <TableDemo sales={sales} />
    </div>
  )
}

export default Sales

const  TableDemo:FC<{sales:Array<any>}> = ({sales})=> {
    return (

      <Table className="shadow border">
        <TableCaption>A list of your recent Sales.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">the name</TableHead>
            <TableHead>price</TableHead>
            <TableHead>amount</TableHead>
            <TableHead className="text-right">total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sales.length > 0 ?sales.map((invoice,idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{invoice?.name}</TableCell>
              <TableCell>{invoice?.price}</TableCell>
              <TableCell>{invoice?.amount}</TableCell>
              <TableCell className="text-right">{invoice?.total + "  $"}</TableCell>
            </TableRow>
          )):
           <></>
          }
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}></TableCell>
            <TableCell className="text-right">{

sales.length > 0 ? sales.reduce((acc, curr) => acc + curr.total, 0) + "  $":""
                }</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  
