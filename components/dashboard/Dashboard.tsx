"use client"

import { BadgePercent, Car, CarFrontIcon, DollarSign, Phone, ShoppingBasket, User } from 'lucide-react'
import React from 'react'

import { LabelList, Pie, PieChart } from "recharts"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import Sales from '../sales/Sales'
const Dashboard = () => {
  return (
    <div className='p-3'>
         <div className='mb-1'>
            <h1 className="font-black text-2xl p-1 text-gray-600">Hi, Welcome</h1>
         </div>

            <Static/>
            <Charts />
            <div className='my-6'>
               <Sales />
            </div>
    </div>
  )
}

export default Dashboard

const Static = ()=>{

    return(
        <div className='flex items-center flex-wrap mb-5'>
        <div className='w-[80%] mx-auto sm:mx-0 mb-2 sm:w-1/2 md:w-1/3 lg:w-1/4'>
          <div className='w-[89.3%] flex flex-col border p-3 items-center rounded-lg bg-orange-100'>
            <div className='mb-3'><ShoppingBasket className='text-orange-700' /> </div>
            <h5 className='mb-2 text-gray-600'>Products</h5>
             <p className='mb-2 text-gray-400'>{2000}</p>
          </div>
        </div>

        <div className='w-[80%] mx-auto sm:mx-0 mb-2 sm:w-1/2 md:w-1/3 lg:w-1/4'>
          <div className='w-[89.3%] flex flex-col border p-3 items-center rounded-lg bg-orange-100'>
            <div className='mb-3'><User className='text-orange-700' /> </div>
            <h5 className='mb-2 text-gray-600'>Users</h5>
             <p className='mb-2 text-gray-400'>{5000}</p>
          </div>
        </div>

        <div className='w-[80%] mx-auto sm:mx-0 mb-2 sm:w-1/2 md:w-1/3 lg:w-1/4'>
          <div className='w-[89.3%] flex flex-col border p-3 items-center rounded-lg bg-orange-100'>
            <div className='mb-3'><BadgePercent className='text-orange-700' /> </div>
            <h5 className='mb-2 text-gray-600'>Sales</h5>
             <p className='mb-2 text-gray-400'>{500}</p>
          </div>
        </div>

        <div className='w-[80%] mx-auto sm:mx-0 mb-2 sm:w-1/2 md:w-1/3 lg:w-1/4'>
          <div className='w-[89.3%] flex flex-col border p-3 items-center rounded-lg bg-orange-100'>
            <div className='mb-3'><DollarSign className='text-orange-700' /> </div>
            <h5 className='mb-2 text-gray-600'>Profits</h5>
             <p className='mb-2 text-gray-400'>{2100 + " $"}</p>
          </div>
        </div>
    </div>
    )
}

const Charts = ()=>{

    return(
        <div className=''>
            <div className='flex items-center h-[450px]'>
                <div className='w-full md:w-3/4 h-full'>
                   <div className='w-[98%] h-full '>
                     <ChartComponent />
                   </div>
                </div>
                <div className='w-full md:w-1/4'>
                  <div  className='w-[99.5%] h-full'>
                    <CircleChart />
                  </div>
                </div>
            </div>
        </div>
    )
}



const chartData = [
  { month: "January", iphone: 1050, samsung: 1200 ,lenovo:800},
  { month: "February", iphone: 1305, samsung: 2000 ,lenovo:960},
  { month: "March", iphone: 2370, samsung: 1250 ,lenovo:740},
  { month: "April", iphone: 1703, samsung: 1990 ,lenovo:810},
  { month: "May", iphone: 2009, samsung: 1360 ,lenovo:900},
  { month: "June", iphone: 2114, samsung: 1430 ,lenovo:870},
]
const chartConfig = {
  iphone: {
    label: "iphone",
    color: "hsl(var(--chart-1))",
  },
  samsung: {
    label: "samsung",
    color: "hsl(var(--chart-2))",
  },
  lenovo: {
    label: "lenovo",
    color: "red",
  },
} satisfies ChartConfig
 function ChartComponent() {
  return (
    <Card className='h-full '>
      <CardHeader>
        <CardTitle>Area Chart - Sales</CardTitle>
        <CardDescription>
          Showing total Sales for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className='h-[270px] w-full' config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="iphone"
              type="natural"
              fill="purple"
              fillOpacity={0.4}
              stroke="purple"
              stackId="a"
            />
            <Area
              dataKey="samsung"
              type="natural"
              fill="orange"
              fillOpacity={0.4}
              stroke="orange"
              stackId="a"
            />
              <Area
              dataKey="lenovo"
              type="natural"
              fill="blue"
              fillOpacity={0.4}
              stroke="blue"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}





const chartDataCircle = [
  { browser: "iphone", visitors: 1050, fill: "purple" },
  
  { browser: "lenovo", visitors: 800, fill: "orange" },
  { browser: "samsung", visitors: 1200, fill: "blue" },
]

const chartConfigCircle = {
  visitors: {
    label: "sales",
  },
  iphone: {
    label: "iphone",
    color: "green",
  },
  samsung: {
    label: "lenovo",
    color: "blue",
  },
  lenovo: {
    label: "samsung",
    color: "red",
  },
 
} satisfies ChartConfig

function CircleChart() {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie  Sales</CardTitle>
        <CardDescription>January - June 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfigCircle}
          className="mx-auto aspect-square max-h-[250px] px-0"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartDataCircle} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfigCircle) =>
                  chartConfigCircle[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
