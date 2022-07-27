import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../Components/LoadingSpinner'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const ProductDetails = () =>  {
    const [loading , setLoading ] = useState(false)
    const [productData , setProductData]  = useState({})

    const params = useParams()
    const productId = params.productId

    useEffect(() => {
        setLoading(true)
        axios.get(API_BASE_URL+"/products/"+productId)
            .then(response => {
                setProductData(response.data)
                setLoading(false)

            })

    } , [])

    useEffect(() => {
        console.log(productData)
    } , [productData])


  return (
    <div className=''>
        {loading && <LoadingSpinner />}
        {
            productData ? <h1>{productData.title}</h1> : <h1>No Data to show</h1>
        }
    </div>
  )
}

export default ProductDetails