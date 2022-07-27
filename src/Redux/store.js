import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart/CartSlice";
import sidebarReducer from "./Sidebar/SidebarSlice";
import glassLayerReducer from "./GlassLayer/GlassLayerSlice";
import userReducer from "./User/UserSlice"

const store = configureStore({
    reducer: {
        cart: cartReducer,
        sidebar: sidebarReducer,
        glassLayer: glassLayerReducer,
        user: userReducer
    }
})

export default store