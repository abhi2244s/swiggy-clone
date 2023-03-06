import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

function Navbar(){
    const cart = useSelector((store)=>store.cart.items)
    return(
        <>
         <nav className = "flex justify-between p-5 border-2 border-solid border-gray-500">
            <div>
                <h1>Food Villa</h1>
            </div>
            <div className = "space-x-6">
                <Link to = "/">
                 <span>Home</span>
                </Link>
                <Link to = "/about"><span>About</span></Link>
                <Link to = "/contact"><span>Contact</span></Link>
                <Link to = "/instamart"><span>Instamart</span></Link>
                <Link to = '/cart'><span>Cart -{cart.length}</span></Link>
                
               
            </div>
         </nav>
        </>
       
    )
}
export default Navbar;