import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import { useDispatch } from "react-redux"
import { addItem } from "./CartSlice"
const RestaurantMenu = ()=>{
    const dispatch = useDispatch()
    const addFoodItems = (item)=>{
      dispatch(addItem(item))
    }
    const {resId} = useParams()
    const[restaurant,setRestaurant]= useState(null)
    useEffect(()=>{
      getRestaurantMenu()
    })

    async function getRestaurantMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=26.8912141&lng=81.0648758&menuId="+ resId)
        const json = await data.json();
        console.log(json)
        setRestaurant(json.data)
    }
    return (!restaurant)?<Shimmer/> :(
        <> 

        <section className="flex gap-20 ">
                <div>
                        <h1>Restaurant id : {resId} </h1>
                        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurant.cloudinaryImageId}
                        alt = "logo"
                        />
                        <h2>{restaurant.name}</h2>
                        <h2>{restaurant.city}</h2>
                        <h2>{restaurant.area}</h2>
                        <h2>{restaurant.avgRating}</h2>
                </div>
                <div>
                    <h1>Menu</h1>
                    {
                        Object.values(restaurant?.menu?.items).map((item)=>
                    
                        <li key={item.id}>{item.name}- <button className="bg-green-100 p-2 m-5" onClick={()=>addFoodItems(item)}>Add Items</button></li>     
                    )
                    }
                </div>
        </section>
                
        
        </>
    )
}
export default RestaurantMenu