import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideCart } from '../Redux/Cart/CartSlice'
import { hideGlassLayer } from '../Redux/GlassLayer/GlassLayerSlice'
import { hideSidebar } from '../Redux/Sidebar/SidebarSlice'

export default function GlassLayer() {
    const glassLayer = useSelector((state) => state.glassLayer.isVisible)
    const cart = useSelector((state) => state.cart.isVisible)
    const sidebar = useSelector((state) => state.sidebar.isVisible)
    const dispatch = useDispatch()



  return (
    <div 
    className={`fixed top-0 left-0 w-screen h-screen transition-all  z-1-  ${glassLayer ? "z-30 bg-semi-transparent" : "delay-200 z-1- bg-transparent"}`}
     onClick={() => {
       if( cart) {dispatch(hideCart())}  
       if(sidebar )  {dispatch(hideSidebar())} 
        dispatch(hideGlassLayer());
    }
    }
     
     >
      <style jsx>
        {`
        //  ${glassLayer ? "html{overflow: hidden}" : ""}
        `}
      </style>

    </div>
  )
}
