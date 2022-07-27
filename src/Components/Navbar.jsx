import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom';
import { showCart } from "../Redux/Cart/CartSlice"
import { showSidebar } from "../Redux/Sidebar/SidebarSlice"
import {  useDispatch } from 'react-redux'
import navLinks from '../Data/NavData';
import { showGlassLayer } from '../Redux/GlassLayer/GlassLayerSlice';
import Cart from './Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  return (
    <div className='bg-white sticky z-10 top-0 mb-7 shadow-md '>
      <div className="container max-w-screen-xl ">
        <div className='flex items-center justify-between h-16 '>
            <div className='lg:hidden text-xl'>
                <button 
                    className=''
                    onClick={() => {
                      dispatch(showSidebar());
                      dispatch(showGlassLayer()) 
                    }}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <h1 className='capitalize font-semibold text-xl'><span className='text-primary'>E</span>commerce</h1>

            {/* <nav className='hidden lg:block'>
              <ul className='flex gap-4 '>

                {
                  navLinks.map((link , ind) => 
                    <li key={ind} className=" font-normal tracking-wide	 hover:text-primary uppercase">
                        <Link to={link.href} >{link.text}</Link>
                    </li>)
                }
              </ul>
            </nav> */}

            <button 
                onClick={() =>{
                  dispatch(showCart())
                  dispatch(showGlassLayer())
                  }}
                className="relative group border-0"
            >
            <FontAwesomeIcon 
                icon={faCartShopping}
                className=" text-primary lg:text-black group-hover:text-primary text-xl"
                />
                  <span className='bg-red-600 text-white rounded-full text-sm w-5 h-5 absolute -top-3 -right-2'>{cart.cartProducts.length}</span>
            </button>
        </div>

    </div>
    </div>
  )
}

export default Navbar