import React, { useState } from 'react'

function data() {
    var [a,b]= useState(69)
  return (
    <div>
        <h1>{a+1}</h1>
        <button onClick={()=>b(a+1 )} className="px-2 py-2 bg-green-500 m-2 rounded"> click me</button>
        
    </div>
  )
}

export default data