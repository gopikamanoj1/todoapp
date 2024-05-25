import React, { useState } from 'react'

function Color(){
    const [color,changeClr]=useState("red");
    return(
        <div>
<h1> my favorite color {color}</h1>
 
<button  onClick={()=>{
    changeClr("blue")
}}>Blue</button>

<button onClick={()=>{
    changeClr("black")
}}> Black</button>

        </div>
    )
}

 
export default Color;