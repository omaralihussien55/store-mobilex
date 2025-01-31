import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import React from 'react'

const page = () => {
  return (
    <div className='relative p-3 h-full'>
  <div className="absolute inset-0 bg-blue-600/40 z-50 "></div>
      <div className="flex flex-col gap-6 max-w-sm mx-auto mt-12 pointer-events-none " >
      <Card className="relative">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl ">Sign Up</CardTitle>
 
        </CardHeader>
        <CardContent>
          <form noValidate >
            <div className="flex flex-col gap-6">
            <div className="grid gap-2">
                <Label htmlFor="email">First Name</Label>
                <Input
                  id="First Name"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Last Name</Label>
                <Input
                  id="Last Name"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  
                </div>
                <Input id="password" type="password" required
               
                />
              </div>
              <Button type="submit" className="w-full">
                sign up
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              i have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign in
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
    </div>
  )
}

export default page
