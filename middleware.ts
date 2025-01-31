import { NextRequest, NextResponse } from "next/server"

import {withAuth} from "next-auth/middleware"
import { getToken } from "next-auth/jwt";
import  Cookies from "universal-cookie"
import { cookie } from "./lib/Cookies";



// export function middleware(request:any){
//    console.log("runing with auth")
//     return NextResponse.next()
// }
export default withAuth(
  async  function middleware(request:NextRequest) {
    console.log("runing with auth")
        const pathname = request.nextUrl.pathname;
        
        const cookies = request.cookies.get("login")?.value;
        // const isAuth = await getToken({req:request})
        const protectRoute = ["/dashboard"]
        const isAuthRoute  = pathname.startsWith("/auth") 
        const isHome = pathname.startsWith("/")
        const isProtectRoute= protectRoute.some(route => pathname.startsWith(route))

            if(cookies !== "true" && isProtectRoute){
                return NextResponse.redirect(new URL("/auth/login",request.url))
            }
            if(isAuthRoute && cookies === "true" ){
                return NextResponse.redirect(new URL("/dashboard",request.url))
            }
            // if(isHome && cookies === "true" ){
            //     return NextResponse.redirect(new URL("/dashboard",request.url))
            // }
        
    },{
        callbacks:{
           async authorized() {
                return true
            },
        }
    }
)



export const config = {
    matcher:["/dashboard/:path*","/auth/:path*","/"]
}