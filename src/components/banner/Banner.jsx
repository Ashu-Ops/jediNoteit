import React from 'react'
import './Banner.css';

function Banner() {
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
                    <button className='signup-btn pri-bg-color cur-pointer text-center'>Sign up </button>
                </div>
        </div>
    </div>
  </>
}

export default Banner;
