function RestaurantCard({name,cloudinaryImageId,description,price}){
    return(
        <>
          <div className = "w-[200px] border border-solid border-gray-300 p-5">
             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}
             alt = "card-img"
             />
             <h1>{name}</h1>
             <h1>{price}</h1>
             <h1>{description} </h1>
          </div>
        </>
    )
}
export default RestaurantCard