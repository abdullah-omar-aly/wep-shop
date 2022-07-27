import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login : (state , action) => {
            
            state = action.payload
            console.log(state)
        },
        logout : ( state ) => {
            state = {

            }
            console.log(state.user)

        }
    }
})

export const {login , logout } = userSlice.actions
export default (userSlice.reducer )
