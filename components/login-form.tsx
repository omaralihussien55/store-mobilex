"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { cookie } from "@/lib/Cookies"
import { useRouter } from "next/navigation"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
const [email,setEmail] = useState("omar@gmail.com")
const [password,setPassword] = useState("1234")
const [error,setError] = useState("")
const [sniper,setSniper] = useState(false)
const router = useRouter()
  const handleSubmit  = (e)=>{
     e.preventDefault()
      if(email && password){
           if(email === "omar@gmail.com" && password==="1234"){
            setSniper(true)
            setTimeout(() => {
              cookie.set("login","true",{path:"/"})
              router.push("/dashboard")
              setSniper(false)
              if (typeof window !== "undefined") {
                // Check if we're on the client-side
                window.location.reload();
              }
            }, 2500);

           }else{
            setError("Sign In Error")
           }
      }else{
        setError("empty vaild")
      }

      
  }
  return (
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <Card className="relative">
       {sniper && <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-blue-400/55">
          <h4 className="font-extrabold text-2xl text-center text-green-700">loading .....</h4>
        </div>}
        <CardHeader className="text-center">
          <CardTitle className="text-2xl ">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form noValidate onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                   value={email}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input value={password} id="password" type="password" required
                onChange={(e)=> setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          {error ? <p className="text-red-500 p-1 my-1 text-center">{error}</p>:""}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
