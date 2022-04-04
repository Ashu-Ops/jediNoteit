
import axios from 'axios';
import React , { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthorizer } from '../../context/AuthorizerContext';


export const Login=()=> {

    const navigator = useNavigate();
    const [userInput , setUserInput ] =useState({email:"",password:""});
    const { authState , authDispatch } = useAuthorizer();
    const guestUser = {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
    }

    const loginSubmitHandler = (e,{email,password})=>{
        e.preventDefault();
        (async () => {
            try {
                const {data , status } = await axios.post("/api/auth/login",{email,password});
                console.log("from loginSubmitHandler",data, status);
                if(status === 200){
                    authDispatch({  type:"LOGIN" , payload : {userData: data } })
                    navigator("/mynotes");
                }      
            } catch (error) {
                alert(error+" login failed " );
            }
        })();
    }

    const inputChangeHandler =(e)=>{
        setUserInput({...userInput , [e.target.name] : e.target.value });
    }

  return <>
  
  <div className="flex-center height-vh-100 ">
        <form className="form-auth flex-center flex-col bx-shadow " onSubmit={(e)=>loginSubmitHandler(e,userInput)}>
            <div className="form-logo wd-100">
                <Link to="/"> 
                    <div className="nav-logo flex-center flex-col ">
                        <i className="fas fa-jedi nav-logo-icon "></i>
                        <span className="nav-logo-txt">Jedi Notes</span>
                    </div>
                </Link>
            </div>
            <div className="form-login">
                <h2 className="padd-top-md">Login</h2>
            </div>
            <div className="form-input padd-md wd-100">
                <div className="input-container wd-100">
                    <label className="padd-top-md" htmlFor="">Email</label>
                    <input type="email" name='email'placeholder="Enter emailId" value={userInput.email} onChange={inputChangeHandler}/>

                    <label className="padd-top-md" htmlFor="">Password</label>
                    <input type="password" name='password'  placeholder="Enter Password" value={userInput.password} onChange={inputChangeHandler} />
                </div>
                <div className="flex-space-btw padd-top-md wd-100">
                    <span><input type="checkbox" /><span className="padd-left-sm">Remember me</span> </span>
                    <a href="/"> Forgot Password ?</a>
                </div>
            </div>
            <div className="form-btn ">
                <button className="btn login padd-sm margin-btm pri-bg-color pri-text-color" type="submit">Login</button>
            </div>
            <div className="form-btn ">
                <button className="nav-login-btn" onClick={(e)=>loginSubmitHandler(e,guestUser)} >Login as guest</button>
            </div>
            <div className="form-next padd-md ">
                <span>
                    <Link to="/signup"> Create New Acoount<i className="fas fa-angle-right padd-left-sm"></i></Link></span>
            </div>
        </form>  
    </div>

  </>
}

