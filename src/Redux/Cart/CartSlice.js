import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isVisible: false,
    cartProducts: [],
    totalAmount: null
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        showCart: (state) => {
            state.isVisible = true
        },
        hideCart: (state) => {
            state.isVisible = false
        },
        addToCart: (state, action) => {
            const Ind = state.cartProducts.findIndex(item => item.id === action.payload.id)
            if (Ind === -1) {
                console.log("doesn't exist in the cart")
                const cartProduct = {
                    id: action.payload.id,
                    title: action.payload.title,
                    quantity: 1,
                    price: action.payload.price,
                    image: action.payload.images[0]
                }
                state.cartProducts = [...state.cartProducts, cartProduct]
                console.log(state.cartProducts[state.cartProducts.length - 1])
            } else { console.log('already exist')
        
        }
        },
        increaseTheProductQuantityByOne: (state, action) => {
            const Ind = state.cartProducts.findIndex(item => item.id === action.payload)
            state.cartProducts[Ind].quantity ++
        },
        decreaseTheProductQuantityByOne: (state, action) => {
            const Ind = state.cartProducts.findIndex(item => item.id === action.payload)
            state.cartProducts[Ind].quantity--
            console.log(state.cartProducts[Ind].quantity)
            if(state.cartProducts[Ind].quantity === 0 ){
                state.cartProducts.splice(Ind , 1)
            }
            console.log(state.cartProducts)
        },
        calcTotalAmount: (state) => {
            let sum = 0
            for (let i = 0; i < state.cartProducts.length; i++) {
                sum = sum + state.cartProducts[i].price * state.cartProducts[i].quantity
            }
            state.totalAmount = sum
        }
    }
})

export const {
     showCart,
     hideCart,
     addToCart,
     increaseTheProductQuantityByOne,
     decreaseTheProductQuantityByOne,
     calcTotalAmount
     } = cartSlice.actions
export default (cartSlice.reducer)
