import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    products: Array<any>,
    productsFavorit: Array<any>,
    itemDetails:any,
    Amount:number,
    sales:Array<any>
}

const initialState: CounterState = {
  products: localStorage.getItem("newprojects")?JSON.parse(localStorage.getItem("newprojects")||""): localStorage.getItem("projects")?JSON.parse(localStorage.getItem("projects")||""):[],
  productsFavorit:[],
  itemDetails:{},
  Amount:1,
  sales: localStorage.getItem("sales") ?JSON.parse(localStorage.getItem("sales")||"") :[]
}

export const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
    HandleProducts: (state,action) => {
        const items:Array<any> =localStorage.getItem("newprojects")?JSON.parse(localStorage.getItem("newprojects")||""): localStorage.getItem("projects")?JSON.parse(localStorage.getItem("projects")||""):[]
        if(action.payload == ""){
            state.products = items
        }else{
            state.products = items.filter((item,idx)=> item.category == action.payload )
        }
        
    },
    HandleAddCart :(state,action)=>{
        const items:Array<any> = localStorage.getItem("newprojects")?JSON.parse(localStorage.getItem("newprojects")||""):state.products
        const newItem = items.map((i)=>{

            if(i.id == action.payload){
                  return {...i,inCart:true}
            }else{
                  return i
            }
        })

        localStorage.setItem("newprojects",JSON.stringify(newItem))
        state.products = localStorage.getItem("newprojects")?JSON.parse(localStorage.getItem("newprojects")||""):newItem
        state.itemDetails = state.products.find(i=> i.id == action.payload)
    },
    HandleFavorit :(state,action)=>{
        const items:Array<any> = localStorage.getItem("newprojects")?JSON.parse(localStorage.getItem("newprojects")||""):state.products
        const newItem = items.map((i)=>{

            if(i.id == action.payload){
                  return {...i,fav:!i.fav}
            }else{
                  return i
            }
        })

        localStorage.setItem("newprojects",JSON.stringify(newItem))
        state.products = localStorage.getItem("newprojects")?JSON.parse(localStorage.getItem("newprojects")||""):newItem
    },
    HandleChangeCategory :(state,action)=>{
        const items:Array<any> = localStorage.getItem("newprojects")?JSON.parse(localStorage.getItem("newprojects")||""):state.products
        
        if(action.payload === "all category"){
            state.products = items
        }else{

            state.products = items.filter(i=> i.category == action.payload)
        }
    },
    HandleAddToFavorite :(state,action)=>{
        const items:Array<any> = localStorage.getItem("newprojects")?JSON.parse(localStorage.getItem("newprojects")||""):state.products

            state.productsFavorit = items.filter(i=> i.fav == true)
        
    },

    HandleGetItemDetails :(state,action)=>{
        const items:Array<any> = localStorage.getItem("newprojects")?JSON.parse(localStorage.getItem("newprojects")||""):state.products

            state.itemDetails = items.filter(i=> i.id == action.payload)[0]
        
    },
    HandleAmount :(state,action)=>{
         console.log(action.payload,action.type)
         const items:Array<any> = localStorage.getItem("newprojects")?JSON.parse(localStorage.getItem("newprojects")||""):state.products

         if(action.payload.type == "decrease"){
          
               const allItems = items.map((item)=>{
                if(item.id == action.payload.id){
                 return    {...item,amount:item.amount > 1 ? item.amount -=1:1 ,total:item.amount * item.price}
                }else{
                    return item
                }
            }) 
            localStorage.setItem("newprojects",JSON.stringify(allItems))
            const neItems = JSON.parse(localStorage.getItem("newprojects")||"")
             const editItem =  neItems.find((i:any) => i.id==action.payload.id)
               state.itemDetails = editItem
               state.products =neItems
             
         }else{
            // if(state.Amount > 1){
                // state.Amount +=1
                const allItems = items.map((item)=>{
                    if(item.id == action.payload.id){
                     return    {...item,amount:item.amount +=1,total:item.amount * item.price}
                    }else{
                        return item
                    }
                }) 
                localStorage.setItem("newprojects",JSON.stringify(allItems))
               const neItems = JSON.parse(localStorage.getItem("newprojects")||"")
                const editItem =  neItems.find((i:any) => i.id==action.payload.id)
                state.itemDetails = editItem
                state.products =neItems
             }
        //  }
    },
    HandleRemoveCart :(state,action)=>{
        const items:Array<any> = localStorage.getItem("newprojects")?JSON.parse(localStorage.getItem("newprojects")||""):state.products

         const newItem = items.map((item,idx)=>{
              if(item.id == action.payload){
                 return {...item,amount:1,total:0,inCart:false}
              }else{
                return item
              }
         })

         localStorage.setItem("newprojects",JSON.stringify(newItem))

          state.products = localStorage.getItem("newprojects")?JSON.parse(localStorage.getItem("newprojects")||""):state.products
          state.itemDetails = state.products.find(i=> i.id = action.payload)
    },

    HandleConfirmCart :(state,action)=>{
        const items:Array<any> = localStorage.getItem("newprojects")?JSON.parse(localStorage.getItem("newprojects")||""):state.products

         const Sales:Array<any> =localStorage.getItem("sales")? JSON.parse(localStorage.getItem("sales")||""):[]
          
         const getItem = Sales.find((i) => i?.id === action.payload?.id)
         console.log(getItem)
         if(getItem){
            console.log("one")
             const EditItems = Sales.map(i=>{
                if(i.id == action.payload?.id){
                    return {...i,amount:i.amount + action.payload.amount , total:i.total + (action.payload.amount * i.price ) }
                }else{
                    return i
                }
                
             })




             localStorage.setItem("sales",JSON.stringify(EditItems))
             state.sales = JSON.parse(localStorage.getItem("sales")||"");
         }else{
            console.log("two")
            Sales.push(action.payload)
            localStorage.setItem("sales",JSON.stringify(Sales))
            state.sales = JSON.parse(localStorage.getItem("sales")||"");
         }
         
         
  
        const newItem = items.map((item,idx)=>{
             if(item.id == action.payload.id){
                return {...item,amount:1,total:0,inCart:false}
             }else{
               return item
             }
        })

        localStorage.setItem("newprojects",JSON.stringify(newItem))

         state.products = localStorage.getItem("newprojects")?JSON.parse(localStorage.getItem("newprojects")||""):state.products


       
    },

    HandleSearchProduct:(state,action)=>{
        const items:Array<any> = localStorage.getItem("newprojects")?JSON.parse(localStorage.getItem("newprojects")||""):state.products

        if(action.payload == ""){
           state.products = items
        }else{
           const newItem = items.filter((i)=> i?.name.toLowerCase().includes(action.payload?.toLowerCase().trim()))
           state.products = newItem
        }
    }
   
  },
})

// Action creators are generated for each case reducer function
export const {HandleAmount, HandleConfirmCart,HandleRemoveCart,HandleProducts,HandleAddCart,HandleSearchProduct,
              HandleFavorit,HandleChangeCategory,HandleAddToFavorite,HandleGetItemDetails} = ProductSlice.actions

export default ProductSlice.reducer