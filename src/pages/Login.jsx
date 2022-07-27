import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import "../App.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Redux/User/UserSlice";

// any time any of these fields change we will clear the error message because the user has read that error
// message and now they are adjusting by making changes
const EMAIL_REGEX =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const LOGIN_URL = process.env.REACT_APP_LOGIN_URL
const form_input_sytle = "border py-1 px-2 rounded-md w-full focus:outline-none outline-none border-1 focus:border-blue-400"

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const redirectPath = location.state?.path || "/"
    const emailRef = useRef()
    const errRef = useRef();

  
    useEffect(() => {
      emailRef.current.focus()
    }, [])

    const [errMsg, setErrMsg] = useState('');


    const [email, setEmail] = useState('')
    const [validEmail , setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)
    useEffect(() => {
      const valid = EMAIL_REGEX.test(email)
      setValidEmail(valid)
    }, [email])

    const [pwd, setPwd] = useState('')
    const [pwdFocus, setPwdFocus] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrMsg('')
        // if button enabled with JS hack
        const valid = EMAIL_REGEX.test(email);
        if (!valid) {
            setErrMsg("Invalid Email");
            return;
        }
        if(!email || !pwd){
            setErrMsg('Invalid Entry')
        }
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({  email , password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            dispatch(login(response.data))
            navigate(redirectPath , {replace: true})


        } catch (err) {
            setErrMsg('login Failed')
            errRef.current.focus();
        }
    }
    
    return (
        <section className="flex justify-center items-start ">
            <div className="Login bg-white flex flex-col items-center mt-10 px-3 py-7 rounded-xl justify-center w-full border-1 max-w-sm ">
                    <h1 className="font-bold text-2xl pb-4">LOGIN</h1>
                    <p 
                        ref={errRef} className={`mb-3 bg-red-500 opacity-80 text-white w-full p-2 text-center ${errMsg ? "errmsg" : "offscreen"} `}
                        aria-live="assertive"
                        >
                          {errMsg}
                    </p>                    <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-3 w-full ">
                      
                      <div className="w-full">
                        <input
                          id="email"
                          className={form_input_sytle}
                          type="email" 
                          ref={emailRef}
                          autoComplete="on"
                          required
                          placeholder="Email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                        />
                      </div>
    
                      <div className="w-full">
                        <input
                          id="password"
                          className={form_input_sytle}
                          autoComplete="off"
                          type="password"
                          required
                          placeholder="Password"
                          value={pwd}
                          onChange={e => setPwd(e.target.value)}
                          onFocus={() => setPwdFocus(true)}
                          onBlur={() => setPwdFocus(false)}
                        />
                      </div>
                      
    
    
                      <button
                          aria-label="submit"
                          disabled={validEmail && pwd ? false : true}
                          className='w-full transition-transform duration-300 cursor-pointer bg-primary text-primary-fg px-5 py-2 rounded-md'
                        >
                          LOGIN
                      </button>
                    </form>

                    <div className="flex justify-start w-full pt-3">
                      <Link to="/account/register" className="inline-block" >
                      <button className="text-blue-900 ">Don't have an account yet? <span className="text-yellow-500 font-light">Sign Up</span></button>
                      </Link>
                    </div>
        </div >
        </section>
      );
  
}

export default Login