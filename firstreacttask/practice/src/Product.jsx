import React, { useState } from 'react'

function Product({age, data}) {
    const [a,b]=useState(false);
  return (
    <div className="w-full h-96 bg-yellow-600">Product
    <div className="w-32 h-32 bg-slate-600 m-6 p-4">
        <p>this is paragraph from div2</p>    
    </div>
    <h4 className={`${a === false ? "text-red-600": "text-blue-600"}`}>{a === false ? "hello" :"hey"}</h4>
    <button className="px-2 py-2 bg-green-600 text-white" onClick={()=>b(!a)}>change</button>
    </div>
  )
}

export default Product