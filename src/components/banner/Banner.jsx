import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthorizer } from '../../context/AuthorizerContext';
import './Banner.css';

function Banner() {
  const navigator=useNavigate();
  const {authState} =useAuthorizer();
  return <>
  <div className="banner  d-flex pri-text-color pos-rel">
        <img className="banner__img pos-abt" src="./assets/hero.jpg" alt="noteimg" />
        <div className="banner__container pri-text-color  d-flex " >
                <div className="container__info pri-text-color pos-rel " >
                    <h2 className="info__title margin-btm"> 
                        The Ultimate Notes App for you personal notes and daily notes
                    </h2>
                    <p>
                        Powerful features and a pleasant, focused writing experience combined in one tool,
                         made for people who love to write and write a lot — this is Jedi Notes.
                    </p>

                    { !authState.loginStatus?
                        <button className='signup-btn pri-bg-color cur-pointer text-center' onClick={()=>navigator("/signup")}>Sign up </button>
                        :
                        <button className='signup-btn pri-bg-color cur-pointer text-center' onClick={()=>navigator("/myNotes")}>Go to MyNotes </button>
                    }
                </div>
        </div>
    </div>
  </>
}

export default Banner;
