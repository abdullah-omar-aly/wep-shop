import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isVisible : false
}

const glassLayerSlice = createSlice({
    name: "GlassLayer",
    initialState,
    reducers: {
        showGlassLayer : (state) => {
            state.isVisible = true
        },
        hideGlassLayer: (state ) => {
            state.isVisible = false
        }
    }
})

export const {showGlassLayer , hideGlassLayer } = glassLayerSlice.actions
export default ( glassLayerSlice.reducer )
