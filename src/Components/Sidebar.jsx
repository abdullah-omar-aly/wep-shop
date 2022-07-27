import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faUserCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import navLinks from '../Data/NavData'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {  hideSidebar } from "../Redux/Sidebar/SidebarSlice"
import { hideGlassLayer } from '../Redux/GlassLayer/GlassLayerSlice'



function Sidebar() {
  const dispatch = useDispatch()
  const sidebar = useSelector((state) => state.sidebar.isVisible)
    return (
        <div className={`fixed z-40 top-0 left-0 bottom-0 w-72 transition-transform ease-in-out duration-500 ${sidebar ? "" : "-translate-x-72"}`}>
            <div className='bg-dark-gray w-full h-full text-white px-4 '> 
                <div className='py-5 pl-1 border-normal-gray border-b'>
                    <button 
                    className='cursor-pointer text-2xl'
                        onClick={() => {
                        dispatch(hideSidebar())
                        dispatch(hideGlassLayer())
                    }}
                    
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div>
                    <ul className='flex flex-col '>
                        {
                        navLinks.map((link , ind) => 

                            <li 
                            className='border-secondary-400 border-b bprder-1 text-lg  ' style={{ fontSize: "15px" }}
                                key={ind} >
                                <Link 
                                    to={link.href}
                                    className="px-2 rounded-xl hover:bg-primary tracking-wider uppercase  py-3 inline-block w-full"
                                    onClick={() => {
                                        dispatch(hideSidebar())
                                        dispatch(hideGlassLayer())
                                    }}                                    
                                    >{link.text}</Link>
                            </li>)
                        }
                    </ul>
                </div>
                <div>
                        <Link 
                            to="/account/login" 
                            onClick={() => {
                            dispatch(hideSidebar())
                            dispatch(hideGlassLayer())
                            }} 
                        >
                            <div className='py-2 pl-2 mt-2 hover:text-primary'>
                                <span className='pr-3'><FontAwesomeIcon icon={faUserCheck} /></span>
                                <span className='uppercase'>log in</span>
                            </div>
                        </Link>

                        <Link 
                            onClick={() => {
                                dispatch(hideGlassLayer())
                                dispatch(hideSidebar())
                            }} 
                            to='/account/register'
                        >
                            <div className='py-2 pl-2 hover:text-primary'>
                                <span className='pr-3'><FontAwesomeIcon icon={faUser} /></span>
                                <span className='uppercase'>create account</span>
                            </div>
                        </Link>
                </div>
                <div className='mt-8 relative'>
                    <input className='search-field bg-secondary-400 px-3 py-3 w-full text-sm pr-10' type="text" placeholder="Search something" />
                    <span className='p-3 pr-4 cursor-pointer absolute right-0 top-0'><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar



// <div className={`lg:hidden `}>
// <div className={`z-10 bg-secondary-500 fixed top-0  bottom-0 text-white  px-4  transition ease-in-out duration-500 ${sidebar ? "" : "-translate-x-72"}`}>
//     <div className='py-5 pl-1 border-secondary-400 border-b'>
//         <button 
//         className='cursor-pointer text-2xl'
//          onClick={() => {
//             dispatch(hideSidebar())
//             setInterval(() => {
//                 dispatch(hideGlassLayer())
//             } , 500)
//         }}
         
//          ><FontAwesomeIcon icon={faXmark} /></button>
//     </div>
    
// </div>
// </div>