import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../Components/LoadingSpinner'
import {addToCart , calcTotalAmount, showCart} from "../Redux/Cart/CartSlice"
import { showGlassLayer } from '../Redux/GlassLayer/GlassLayerSlice'


function Home() {
  const [products , setProducts] = useState([])
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    axios.get(process.env.REACT_APP_API_BASE_URL + '/products')
      .then(response => {
        setError("")
        setLoading(false)
        setProducts(response.data)
      })
      .catch(error => {
        setLoading(false)
        setProducts([])
        setError(error)
      })
 

  } , [])
  return (
    <div className='container max-w-screen-xl'>
        
        { loading && <LoadingSpinner /> }
        { error && <h1>{error}</h1>}
        <div>
           {
            products && <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center  items-center'>
              {
                products.map((product , ind) => (

                  <div className='relative flex flex-col justify-between self-stretch bg-white rounded-lg overflow-hidden py-3 shadow-xl'>
                            <div className='discount absolute left-0 top-0 bg-main-yellow px-3 py-1 rounded-br-xl tracking-tighter text-white'>
                              - {product.discount} %
                            </div>
                            <Link to={`/products/${product.id}`} className='flex items-center justify-center my-auto h-80 w-auto overflow-hidden'>
                                <img src={product.images[0]} alt="" className=' mx-auto my-auto ' style={{maxHeight: "350px"}}/> 
                            </Link>
                              <div className='flex justify-center flex-col px-3'>
                                  <h3 className='text-lg text-normal-gray font-bold mb-2'>{product.title}</h3>
                                  <div className='price  my-3'>
                                      <h4 className='before-discountfont-bold text-lg text-black'>{product.price} $</h4>
                                      <h4 className='after-discount font-medium  text-md line-through text-slate-500'>{product.price - product.price * (product.discount/100)} $</h4>
                                  </div>
                              <button  
                                    className='bg-primary mx-auto font-bold text-sm text-white py-1 px-4 capitalize rounded-md'
                                    onClick={() =>{
                                    dispatch(addToCart(product)) 
                                    dispatch(calcTotalAmount())
                                    dispatch(showGlassLayer())
                                    dispatch(showCart())
                                    }
                                  }
                                    >
                                  add to cart
                              </button>
                           </div>                     
                      
                  </div>

                ))
              }
            </div>
           }
        </div>
        
    </div>
  )
}

export default Home