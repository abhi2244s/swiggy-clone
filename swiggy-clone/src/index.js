import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './components/Footer';
// import App from './App';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from './components/About';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Contact from './components/Contact';
import Instamart from './components/Instamart';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
import { Provider } from 'react-redux'
import store from './components/Store';



const AppLayout = ()=>{
  return (
   <Provider store={store}>
    <Navbar/>
    <Outlet/>
    <Footer/>
   </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout/>,
    errorElement : <Error/>,
    children : [
      {
        path : '/',
        element : <Body/>
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
         path : '/instamart',
         element :<Instamart/>
      },
      {
        path : "/cart",
        element : <Cart/>
      },
      {
        path : "/restaurant/:resId",
        element : <RestaurantMenu/>,
      },
    ],
   
  },
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={appRouter}/>
);


