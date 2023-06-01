import React from "react";
import {Link} from 'react-router-dom';
import  "../Landing/Landing.css";



export default function Landing(){
  
  
    return (
        <div className="nav">
           <h1>Welcome, here you can <br />
                build or search your <br />
                 favorite recipes...
           </h1>
           <Link to='/home' id='click'>
            <button>let's start</button>
           </Link>
        </div>
    )
}