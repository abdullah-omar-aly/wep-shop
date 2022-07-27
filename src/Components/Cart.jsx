import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { hideCart } from "../Redux/Cart/CartSlice";
import { useSelector, useDispatch } from 'react-redux'
import { faXmark , faPlus, faMinus, faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import { hideGlassLayer } from '../Redux/GlassLayer/GlassLayerSlice';
import { Link } from 'react-router-dom';
import { increaseTheProductQuantityByOne , decreaseTheProductQuantityByOne , calcTotalAmount} from '../Redux/Cart/CartSlice';


const Cart = () => {
  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()




  return (
      <div className={`fixed z-40 top-0 right-0 h-screen  w-80 md:w-96 transition-transform ease-in-out duration-500 ${cart.isVisible ? "" : "translate-x-96"}`}> 
            <div className='bg-dark-gray w-full h-full text-white px-4 flex flex-col'> 
                <h2 className='py-6 uppercase border-normal-gray border-b font-semibold text-lg flex justify-between items-center h-20'>
                    <div>
                        <span>your cart</span>
                        <span className='ml-3 text-sm font-normal lowercase text-slate-300'>{`(${cart.cartProducts.length} items)`}</span>
                    </div>
                    <button 
                        onClick={() => {
                            dispatch(hideCart())
                           dispatch(hideGlassLayer())
                        }} 
                        className='cursor-pointer text-2xl mr-2 p-2'
                        >
                            <FontAwesomeIcon icon={faXmark} />
                    </button>
                </h2>
              
                    {
                        cart.cartProducts.length  === 0
                        ? <p className='text-sm pt-4'>Your cart is currently empty</p>
                        : <div 
                                className='flex flex-col justify-between h-full ' 
                                > 

                            <div className='cart-items flex flex-col overflow-auto '
                                   style={{maxHeight: "calc(100vh - 240px)"}}
                            >
                            {cart.cartProducts.map((cartProduct , ind) => (
                                <div 
                                    key={ind}
                                    className=" border-b border-normal-gray py-3 flex gap-3" 
                                    
                                >
                                    <Link 
                                        to={`/products/${cartProduct.id}`}
                                        onClick={() => {
                                            dispatch(hideCart())
                                            dispatch(hideGlassLayer())
                                        }}
                                    >

                                        <div className='w-20 h-20 bg-gray-200 rounded-sm'>
                                            <img 
                                                src={cartProduct.image} 
                                                alt=""
                                                className='object-fit '
                                                />
                                        </div>
                                    </Link>
                                    <div className='flex flex-col justify-between flex-grow'>
                                        <h3 className='capitalize'>
                                            <span>
                                                <Link 
                                                    to={`/products/${cartProduct.id}`}
                                                    onClick={() => {
                                                        dispatch(hideCart())
                                                        dispatch(hideGlassLayer())
                                                    }}
                                                >
                                                    {cartProduct.title}
                                                </Link>
                                            </span>
                                        </h3>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center justify-center '>
                                                <button 
                                                     className='border border-normal-gray  px-1 text-sm'
                                                     onClick={() => {
                                                        dispatch(decreaseTheProductQuantityByOne(cartProduct.id))
                                                        dispatch(calcTotalAmount())
                                                     }}
                                                >
                                                    <FontAwesomeIcon icon={faMinus}/>
                                                    </button>
                                                <span className='p-2 border border-normal-gray'>{cartProduct.quantity}</span>
                                                <button 
                                                    className='border border-normal-gray px-1 text-sm'
                                                    onClick={() => {
                                                        dispatch(increaseTheProductQuantityByOne(cartProduct.id))
                                                        dispatch(calcTotalAmount())
                                                    } }

                                                >
                                                    <FontAwesomeIcon icon={faPlus}/>
                                                </button>
                                            </div>
                                            <div className='w-fit pr-3'>{cartProduct.price} $</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <style jsx>
                                {`
                                .cart-items::-webkit-scrollbar {
                                    width: 5px;
                                  }
                                `}
                            </style>
                            </div>
                            <div className='border-t border-normal-gray h-40'>
                                <div className='flex justify-between items-center py-2' >
                                    <span className='uppercase'>subtotal</span>
                                    <span>{cart.totalAmount} $</span>
                                </div>
                                <p className="text-center italic text-slate-400">Shipping, taxes, and discounts calculated at checkout</p>
                                <button 
                                    className='uppercase bg-primary w-full py-2 my-3'
                                >
                                    <span className='mr-3'>check out</span>
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                    
                                </button>
                            </div>
                        </div>
                    }
            </div>
      </div>

  );
};

export default Cart;

