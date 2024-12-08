import React from "react";
import "../stylings/home.css"
import bgImage from "../assets/Images/background screen1.svg"

const Home = ()=> 
{
    return(
        <>
        <img src={bgImage} alt="bgimage" className="bg-image"  />
        <div className="container">
        <div className="content">
          <p className="posted">Posted on startup</p>
          <h2>Step-by step guide to choosing 
          best font-pairs</h2>
          <p className="name">By Lorem ipsum| May 23, 2022</p>
          <p className="subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias, quia itaque nostrum culpa eos porro odit quaerat tempore nulla vero, placeat ab sequi facere mollitia quas unde esse tempora?</p>
          <button className="readmore">Read More  </button>
        </div>
        </div>
        
    
    
        </>
    )
}
export default Home