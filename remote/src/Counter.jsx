import React from 'react'
import { useState } from "react";


export default function Counter (){

 const [count,setCount]=useState(0)

    return(
        <>
        <div>
            <h1>{count}</h1>

          <button onClick={(e)=>setCount(count+1)}>+ Increase Count</button>
        </div>
        
        
        
        </>
    )
}