import React from 'react'
import { Navigate , useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function RequireAuth({children}) {
    const User = useSelector(state => state.user)
    const location = useLocation()

    if (User) {console.log("logged in" , User)
    }else{
        console.log('not logedd in' , User)
    }

    if(!User){
        return <Navigate to="account/login" state={{path: location.pathname}} />
    }
    
    return children
}

export default RequireAuth