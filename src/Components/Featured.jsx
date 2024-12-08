import React from "react";
import "../stylings/featured-post.css"
import FeaturedImage from "../assets/Images/building.svg"

const Featured = ()=>
{
    return(
        <>
       
            <div className="feature-container">
              <p className="Featured-text">Featured Post</p>
      
              <img src={FeaturedImage} alt="" className="FImage" />
            
              <div className="text-content">
                <p>By John Doe | May 23 , 2022</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, commodi! Placeat, ea. Enim dolore consequuntur, expedita similique porro culpa mollitia vel inventore dignissimos provident repellendus accusamus sunt non deleniti amet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur repellat neque ab exercitationem dolore corporis, quod sapiente dolores ad eos atque mollitia unde accusantium iste maiores porro beatae pariatur voluptatem.</p>
                <button className="readMore">Read More</button>
            </div>
          </div>

        <div className="all-posts-container">
          <div className="all-post-text">
            {/* <p className="AllPostText">All Posts</p> */}
            {/* <p className="ViewAllText">View All</p> */}
          </div>
          <div className="postss">
              <p className="namepost">By John Doe | May 23 , 2022</p>
              <p className="postHead8">8 Figma design  systems that you can 
              download for free today.</p>
            </div>
          <div className="postss">
              <p className="namepost">By John Doe | May 23 , 2022</p>
              <p className="postHead8">8 Figma design  systems that you can 
              download for free today.</p>
            </div>
          <div className="postss">
              <p className="namepost">By John Doe | May 23 , 2022</p>
              <p className="postHead8">8 Figma design  systems that you can 
              download for free today.</p>
            </div>
          <div className="postss">
              <p className="namepost">By John Doe | May 23 , 2022</p>
              <p className="postHead8">8 Figma design  systems that you can 
              download for free today.</p>
            </div>

        </div>
       
        </>
    )
}
export default Featured