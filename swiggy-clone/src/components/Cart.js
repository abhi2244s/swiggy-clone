import { useSelector } from "react-redux"
import RestaurantCard from "./RestaurantCard"
import { useDispatch } from "react-redux"
import { clearCart } from "./CartSlice"

const Cart = ()=>{
    const cart = useSelector((store)=>store.cart.items)
    
    const dispatch = useDispatch()
    const clearItems = ()=>{
        dispatch(clearCart())
    }
    return(
        <>
        <h1>Cart Items - <button className="bg-green-100 p-5 m-5" onClick={()=>clearItems()}>Clear</button></h1>
        <div className="flex flex-wrap gap-20">
        {
            cart.map(item=>
                <RestaurantCard key = {item.id}{...item}/>
            )
         }
        </div>
       
        </>
    )
}
export default Cart