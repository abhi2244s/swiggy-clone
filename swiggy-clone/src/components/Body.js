// import RestaurantList from "./RestaurantList"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import{useState,useEffect} from "react"
import { Link } from "react-router-dom"

function Body(){
    const [searchText,setSearchText] = useState('')
    const [allRestaurants,setAllRestaurants] = useState([])
    const[filteredRestaurants,setFilteredRestaurants] = useState([])

    function filter(searchText,allRestaurants){
       const filterData = allRestaurants.filter((restaurants)=>
       restaurants.data.name.toLowerCase().includes(searchText.toLowerCase())
       )
       return filterData
    }
    useEffect(()=>{
      getRestaurants()
    },[])

   async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8912141&lng=81.0648758&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json)
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        // console.log(setAllRestaurants)
    }
    // if(filteredRestaurants.length===0)return <h1>No match</h1>
    return(filteredRestaurants?.length===0)?<Shimmer/>:(
        <>
        <input type="text" placeholder="Search" value={searchText}
        onChange = {(e)=>{
         setSearchText(e.target.value)
        }}
        className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>

        <button onClick={()=>{
         const data = filter(searchText,allRestaurants)
         setFilteredRestaurants(data)
        }} className="bg-indigo-500 rounded p-2 mx-3">Search</button>

        <div className= "flex flex-wrap gap-20 mt-5">
            {
                filteredRestaurants.map((restaurant)=>{
                    return(
                       <Link to = {'/restaurant/'+restaurant.data.id}
                       key={restaurant.data.id}
                       >
                        <RestaurantCard 
                        {...restaurant.data}
                       />
                        </Link>
                    )
                })
            }
          </div>

        </>
    )
}
export default Body